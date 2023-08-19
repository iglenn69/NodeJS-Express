const express = require("express");
const path = require("path");

const rootDir = require("../util/path"); // Imports the path.js file

const router = express.Router();

// /admin/add-product => GET (only for GET requests)
router.get("/add-product", (req, res, next) => {
  console.log("In the add-product middleware!");
  res.sendFile(path.join(rootDir, "views", "add-product.html")); // Sends a response
});

// /admin/add-product => POST (only for POST requests)
router.post("/add-product", (req, res, next) => {
  console.log(req.body); // undefined without body-parser
  res.redirect("/");
});

module.exports = router;
