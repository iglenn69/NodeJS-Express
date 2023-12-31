const products = [];
const fs = require("fs");
const { get } = require("http");
const path = require("path");
const p = path.join(
  path.dirname(require.main.filename),
  "data",
  "products.json"
);

const getProductsFromFile = (cb) => {
  // cb is callback function

  fs.readFile(p, (err, fileContent) => {
    if (err || fileContent.length === 0) {
      cb([]);
    } else {
      console.log(JSON.stringify(JSON.parse(fileContent)));
      cb(JSON.parse(fileContent));
    }
  });
};
   
module.exports = class Product {
  constructor(t) {
    this.title = t;
  }
  save() {
    getProductsFromFile((products) => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }
  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
};
