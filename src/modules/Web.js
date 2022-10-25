/**
 * Import vendor packages
 */
const os = require('os');
const express = require('express');
const app = express();

/**
 * Check if we are using the dev version
 */
const dev = process.env.NODE_ENV !== 'production';

/**
 * Init the socket connection
 */
const init = () => {
    /**
     * Trust proxy
     */
    app.enable('trust proxy');

    /**
     * Disable powered by header for security reasons
     */
    app.disable('x-powered-by');

    /**
     * Implement a basic health check
     */
    app.get('/_health', (req, res) => {
        res.json({
            status: 'UP',
            host: os.hostname(),
            load: process.cpuUsage(),
            mem: process.memoryUsage(),
            uptime: process.uptime()
        });
    });

    /**
     * Include request logger
     */
    app.use((req, res, next) => {
        console.log(`[WEB] Request: (${req.method}) ${req.originalUrl}`);

        next();
    });

    /**
     * Include GraphQL Playground
     */
    app.get('/', (req, res) => {
        res.send('Hello World! Testing123!');
    });

    /**
     * Start server on specific port
     */
    app.listen(3000, '0.0.0.0');
    console.log(`[WEB] Running on: 0.0.0.0:3000`);
};

module.exports = {init};
