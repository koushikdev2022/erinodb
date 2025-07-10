
const notFoundHandler = (req, res) => {
    return res.status(404).json({
        message: "Page not Found...!",
        status: false,
        status_code: 404,
    });
};


const customErrorHandlingMiddleware = (error, req, res, next) => {
    if (error) {
        console.error("defaultErrorHandler--", error);
        // if (error instanceof MulterError) {
        //     console.error("....multer Error.....");
        //     return res.status(400).json({
        //         message: error?.message,
        //         status: false,
        //         status_code: 400,
        //     });
        // }
        return res.status(error?.status || 500).json({
            message: error?.message || "Internal_Server_Error",
            status: false,
            status_code: error?.status || 500,
        });
    }
    next();
};

module.exports = { notFoundHandler, customErrorHandlingMiddleware };
