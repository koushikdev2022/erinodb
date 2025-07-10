const winston = require('winston');
const path = require('path');
const fs = require('fs');

// Ensure logs directory exists
const logsDir = path.join(__dirname, "../../", 'logs');
if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir, {recursive: true});
}

const customLevels = {
    levels: {
        error: 0,
        warn: 1,
        info: 2,
        http: 3,
        verbose: 4,
        debug: 5,
        silly: 6,
    },
    colors: {
        error: 'red bold',
        warn: 'yellow bold',
        info: 'green',
        http: 'blue',
        verbose: 'cyan',
        debug: 'magenta',
        silly: 'grey',
    },
};

winston.addColors(customLevels.colors);

// Custom format for console output (colorized and readable)
const consoleFormat = winston.format.combine(
    winston.format.timestamp({format: 'YYYY-MM-DD HH:mm:ss'}),
    winston.format.colorize({all: true}),
    winston.format.printf(({level, message, timestamp, stack, ...meta}) => {
        let log = `${timestamp} [${level}]`;

        // Add padding for better alignment
        const levelPadding = ' '.repeat(Math.max(0, 8 - level.replace(/\u001b\[[0-9;]*m/g, '').length));
        log += levelPadding;

        // Main message
        log += `: ${message}`;

        // Add stack trace for errors
        if (stack) {
            log += `\n${stack}`;
        }

        // Add metadata if present
        if (Object.keys(meta).length > 0) {
            log += `\n   Meta: ${JSON.stringify(meta, null, 2)}`;
        }

        return log;
    })
);

// Custom format for file output (structured JSON)
const fileFormat = winston.format.combine(
    winston.format.timestamp({format: 'YYYY-MM-DD HH:mm:ss'}),
    winston.format.errors({stack: true}),
    winston.format.json(),
    winston.format.prettyPrint()
);

// Error-specific format for error logs
const errorFormat = winston.format.combine(
    winston.format.timestamp({format: 'YYYY-MM-DD HH:mm:ss'}),
    winston.format.errors({stack: true}),
    winston.format.printf(({level, message, timestamp, stack, ...meta}) => {
        let log = `${timestamp} [${level.toUpperCase()}]: ${message}`;

        if (stack) {
            log += `\nStack Trace:\n${stack}`;
        }

        if (Object.keys(meta).length > 0) {
            log += `\nAdditional Info:\n${JSON.stringify(meta, null, 2)}`;
        }

        log += '\n' + '='.repeat(80) + '\n';
        return log;
    })
);

const logger = winston.createLogger({
    levels: customLevels.levels,
    level: process.env.LOG_LEVEL || 'debug',
    defaultMeta: {
        service: process.env.SERVICE_NAME || 'app',
        version: process.env.APP_VERSION || '1.0.0'
    },
    transports: [
        // Console transport with colorized output
        new winston.transports.Console({
            format: consoleFormat,
            handleExceptions: true,
            handleRejections: true
        }),

        // Combined log file (all levels)
        new winston.transports.File({
            filename: path.join(logsDir, 'combined.log'),
            format: fileFormat,
            maxsize: 10485760, // 10MB
            maxFiles: 5,
            tailable: true
        }),

        // Error-only log file with detailed formatting
        new winston.transports.File({
            level: 'error',
            filename: path.join(logsDir, 'error.log'),
            format: errorFormat,
            maxsize: 10485760, // 10MB
            maxFiles: 5,
            tailable: true,
            handleExceptions: true,
            handleRejections: true
        }),

        // HTTP requests log file
        new winston.transports.File({
            level: 'http',
            filename: path.join(logsDir, 'requests.log'),
            format: winston.format.combine(
                winston.format.timestamp({format: 'YYYY-MM-DD HH:mm:ss'}),
                winston.format.printf(({timestamp, message, ...meta}) => {
                    return `${timestamp} ${message} ${JSON.stringify(meta)}`;
                })
            ),
            maxsize: 5242880, // 5MB
            maxFiles: 3,
            tailable: true
        })
    ],
    exitOnError: false
});

// Enhanced logging middleware with more details
const logMiddleware = (req, res, next) => {
    // List of paths to skip logging (Swagger UI and docs)
    const skipPaths = [
        '/api-docs',
        '/api-docs/',
        '/api-docs/swagger-ui.css',
        '/api-docs/swagger-ui-bundle.js',
        '/api-docs/swagger-ui-standalone-preset.js',
        '/swagger-custom.css', // if you have custom CSS
        '/swagger-dark.css',   // if you use a dark theme
        '/swagger-ui.css',
        '/favicon-32x32.png',
        // Add more static asset paths as needed
    ];

    // Also skip any subpaths under /api-docs (like /api-docs/swagger-ui-init.js)
    if (
        req.path.startsWith('/api-docs') ||
        req.path.startsWith('/swagger')   // if you serve custom swagger CSS
    ) {
        return next();
    }
    const start = Date.now();

    // Log the incoming request
    logger.http(`${req.method} ${req.url}`, {
        ip: req.ip || req.connection.remoteAddress,
        userAgent: req.get('User-Agent'),
        referer: req.get('Referer'),
        contentLength: req.get('Content-Length')
    });

    // Override res.end to log response details
    const originalEnd = res.end;
    res.end = function (...args) {
        const duration = Date.now() - start;
        const statusCode = res.statusCode;

        // Log response with appropriate level based on status code
        if (statusCode >= 400 && statusCode < 500) {
            logger.warn(`${req.method} ${req.url} - ${statusCode} - ${duration}ms`, {
                statusCode,
                duration,
                ip: req.ip || req.connection.remoteAddress
            });
        } else if (statusCode >= 500) {
            logger.error(`${req.method} ${req.url} - ${statusCode} - ${duration}ms`, {
                statusCode,
                duration,
                ip: req.ip || req.connection.remoteAddress,
                userAgent: req.get('User-Agent')
            });
        } else {
            logger.http(`${req.method} ${req.url} - ${statusCode} - ${duration}ms`, {
                statusCode,
                duration
            });
        }

        originalEnd.apply(this, args);
    };

    next();
};

// Helper functions for structured error logging
const logError = (error, context = {}) => {
    logger.error(error.message || 'Unknown error occurred', {
        error: {
            name: error.name,
            message: error.message,
            stack: error.stack,
            code: error.code
        },
        context,
        timestamp: new Date().toISOString()
    });
};

const logWarning = (message, details = {}) => {
    logger.warn(message, {
        details,
        timestamp: new Date().toISOString()
    });
};

const logInfo = (message, data = {}) => {
    logger.info(message, {
        data,
        timestamp: new Date().toISOString()
    });
};

// Graceful shutdown logging
process.on('SIGINT', () => {
    logger.info('Application received SIGINT, shutting down gracefully...');
    process.exit(0);
});

process.on('SIGTERM', () => {
    logger.info('Application received SIGTERM, shutting down gracefully...');
    process.exit(0);
});

// Handle uncaught exceptions and rejections
process.on('uncaughtException', (error) => {
    logger.error('Uncaught Exception:', {
        error: {
            name: error.name,
            message: error.message,
            stack: error.stack
        }
    });
    process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
    logger.error('Unhandled Promise Rejection:', {
        reason: reason?.toString() || reason,
        promise: promise?.toString() || 'Unknown promise'
    });
});

module.exports = {
    logger,
    logMiddleware,
    logError,
    logWarning,
    logInfo
};