const http = require("http");
const through = require("through2");

const server = http.createServer(function(req, res) {
  if (req.method === "POST") {
    req.pipe(through(write, end)).pipe(res);
  } else {
    res.end("send me a POST\n");
  }
});
server.listen(process.argv[2]);

function write(buf, _, next) {
  this.push(buf.toString().toUpperCase());
  next();
}
function end(done) {
  done();
}

// Official solution
/*
var http = require('http');
  var through = require('through2');

  var server = http.createServer(function (req, res) {
      if (req.method === 'POST') {
          req.pipe(through(function (buf, _, next) {
              this.push(buf.toString().toUpperCase());
              next();
          })).pipe(res);
      }
      else res.end('send me a POST\n');
  });
  server.listen(parseInt(process.argv[2]));
*/
