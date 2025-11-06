console.log("Hello Node.js!!");
// console.log("Process", process.env);

const fs = require("fs");
fs.writeFileSync("test.txt", "Hello Node.js!! 123");
// const data = fs.readFileSync("test.txt");
// console.log(data.toString());
const data = fs.readFileSync("test.txt", "utf-8");
console.log(data);

console.log(__dirname);
console.log(__filename);

console.log("this", this);

const calculateSum = (x, y) => {
  console.log("Sum : ", x + y);
};

// console.log(global); // Node
// console.log(globalThis); // ES2020
// console.log(global === globalThis); // true
// console.log(process === global); // false

// module.exports = calculateSum;
module.exports.calculateSum = calculateSum;
module.exports.data = data;
