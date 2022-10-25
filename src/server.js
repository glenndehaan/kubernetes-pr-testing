/**
 * Import own modules
 */
const web = require('./modules/Web');

/**
 * Main runner
 *
 * @returns {Promise<void>}
 */
const run = async () => {
    console.log('[APP] Started!');
    web.init();
}

/**
 * Run the app
 */
run();
