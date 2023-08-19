const path = require('path');

module.exports = path.dirname(require.main.filename); // Returns the path of the main module (app.js)