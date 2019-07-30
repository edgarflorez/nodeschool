var crypto = require("crypto");

const cipherName = process.argv[2];
const cipherPassphrase = process.argv[3];

const stream = crypto.createDecipher(cipherName, cipherPassphrase);

// console.log(cipherName, cipherPassphrase);
process.stdin(stream).pipe(process.stdout);
