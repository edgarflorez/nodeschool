let through = require("through2");
let stream = through(write, end);

function write(buffer, encoding, next) {
  this.push(buffer.toString().toUpperCase());
  next();
}

function end(done) {
  done();
}

process.stdin.pipe(stream).pipe(process.stdout);

// Official solution
/*
var through = require('through2');
var tr = through(function (buf, _, next) {
  this.push(buf.toString().toUpperCase());
  next();
});
process.stdin.pipe(tr).pipe(process.stdout);
*/
