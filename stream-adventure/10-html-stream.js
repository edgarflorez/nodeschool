let through = require("through2");
let trumpet = require("trumpet");

let th = through(write, end);
let tr = trumpet();

let loud = tr.select(".loud").createStream();
loud.pipe(th).pipe(loud);

function write(buffer, encoding, next) {
  this.push(buffer.toString().toUpperCase());
  next();
}

function end(done) {
  done();
}

process.stdin.pipe(tr).pipe(process.stdout);

// Official solution
/*
var trumpet = require('trumpet');
var through = require('through2');
var tr = trumpet();

var loud = tr.select('.loud').createStream();
loud.pipe(through(function (buf, _, next) {
    this.push(buf.toString().toUpperCase());
    next();
})).pipe(loud);

process.stdin.pipe(tr).pipe(process.stdout);
*/
