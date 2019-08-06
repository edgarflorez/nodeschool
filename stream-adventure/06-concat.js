var concat = require("concat-stream");
var concatStream = concat(reverse);

function reverse(body) {
  let s = body
    .toString()
    .split("")
    .reverse()
    .join("");
  console.log(s);
}

process.stdin.pipe(concatStream);
