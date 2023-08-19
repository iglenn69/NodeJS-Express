const express = require("express");
const path = require('path');

const rootDir = require("../util/path"); // Imports the path.js file

const router = express.Router();

router.get('/', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;