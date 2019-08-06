let through = require("through2");
let split = require("split");

let counter = 0;
let tr = through(function(buffer, _, next) {
  let line = buffer.toString();
  this.push(
    counter % 2 === 0 ? line.toLowerCase() + "\n" : line.toUpperCase() + "\n"
  );
  counter++;
  next();
});
process.stdin
  .pipe(split())
  .pipe(tr)
  .pipe(process.stdout);

// Official solution
/*
var through = require('through2');
var split = require('split');

var lineCount = 0;
var tr = through(function (buf, _, next) {
    var line = buf.toString();
    this.push(lineCount % 2 === 0
        ? line.toLowerCase() + '\n'
        : line.toUpperCase() + '\n'
    );
    lineCount ++;
    next();
});
process.stdin
    .pipe(split())
    .pipe(tr)
    .pipe(process.stdout)
*/
