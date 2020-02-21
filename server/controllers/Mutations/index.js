"use strict";

const fs = require("fs");
const path = require("path");
const basename = path.basename(__filename);

let lets = {};

fs.readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach(file => {
    Object.assign(lets, require(`./${file}`));
  });

module.exports = lets;
