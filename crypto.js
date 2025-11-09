const crypto = require("crypto");

console.log("Hello world!!");

const first = 3445565;
const second = 447458574;

// password based key derivation function (pbkdf2) // Async function
crypto.pbkdf2("Harshit@123", "salt", 50000, 64, "sha512", (err, derivedKey) => {
  if (err) throw err;
  console.log("derivedKey : ", derivedKey.toString("hex"));
});

const key = crypto.pbkdf2Sync("Harshit@123", "salt", 5000000, 64, "sha512");
console.log("key : ", key.toString("hex"));

const sum = (a, b) => a + b;

console.log("Sum is : ", sum(first, second));
