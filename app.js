require("./index.js");
const { calculateSum } = require("./index");
const { data } = require("./index");

console.log("data :: ", data);

const util = require("node:util");
console.log("🚀 ~ util:", util);

calculateSum(2, 8);

