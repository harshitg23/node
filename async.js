const fs = require("fs");
const https = require("https");

console.log("Hello World!");

const name = "Harshit";

console.log(name);

// https.get("https://dummyjson.com/products/1", (res) => {
//   console.log("Data fetched : ");
// });

setTimeout(() => {
  console.log("Timeout");
}, 2000);

// Async method to read file
fs.readFile("test.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("Error : ", err);
  } else {
    console.log("Async Data : ", data);
  }
});

// Sync method to read file
const data = fs.readFileSync("app.js", "utf-8");
console.log("Sync Data : ", data);

function multiply(a, b) {
  return a * b;
}

console.log("Multiply 2 and 8 :", multiply(2, 8));
