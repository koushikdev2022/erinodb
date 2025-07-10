const express = require("express");
const dotEnv = require("@dotenvx/dotenvx")
const { join } = require("path");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

dotEnv.config();

const cors = require("cors");
const morgan = require('morgan');

const defaultErrorHandler = require("./src/middleware/common/customErrorHandlingMiddleware");
const { logMiddleware, logger } = require("./src/logger/logger.js");
const sequelize = require("./src/config/db.js");
const v1MainLoadRouter = require("./src/router/v1load.route.js");

const app = express();

const port = process.env.PORT || 8080;
// initialize logger to global object
global.logger = logger;

app.use(cors({ origin: "*" }));
app.use(morgan("dev"));
app.use(express.urlencoded({ limit: "100mb", extended: false }));
app.use(express.json({ limit: "100mb" }));
app.use(express.static(join(__dirname, "/public/")));
app.use(logMiddleware);

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Node.js API Docs for Get-Mobile",
            version: "1.0.0",
        },
        servers: [
            {
                url: `http://localhost:${port}/`,
            },
            { url: `${process.env?.SERVER_URL || "https://example.com/"}` }
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT'
                }
            }
        }
    },
    apis: ["./src/swaggerDoc/**/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, {
    customCssUrl: '/swagger-custom.css'
}));
// MY-SQL CONNECTION CHECK
sequelize.authenticate()
    .then(() => console.warn("MY-SQL connected successfully."))
    .catch(err => console.error(err));

// ROUTES
app.use("/api/v1", v1MainLoadRouter);
// Custom Error-Handler Middleware's
app.use(defaultErrorHandler.notFoundHandler);
app.use(defaultErrorHandler.customErrorHandlingMiddleware);

// LISTING THE SERVER
app.listen(port, () => {
    console.log(`Server Is Running On http://localhost:${port}`);
});
