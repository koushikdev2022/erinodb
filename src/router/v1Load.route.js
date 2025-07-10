const express = require('express');

const v1MainLoadRouter = express.Router();

const defaultRoutes = [
    // add here
];

defaultRoutes.forEach((route) => {
    if (route.middleware) {
        v1MainLoadRouter.use(route.prefix, route.middleware, route.route);
    } else {
        v1MainLoadRouter.use(route.prefix, route.route);
    }
});

module.exports = v1MainLoadRouter;