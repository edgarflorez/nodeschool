var combine = require("stream-combiner");
let split = require("split");
const through = require("through2").obj;
const zlib = require("zlib");

module.exports = function() {
  let books = {};
  let input = through(write, end);
  let currentGenre;
  let booksByGenre;
  let counter = 0;

  function write(buf, _, next) {
    buf = JSON.parse(buf);
    console.log(buf);
    if (buf.type == "genre") {
      console.log("A");
      currentGenre = buf.name;
      books[currentGenre] = [];
    } else {
      console.log("B");
      books[currentGenre] = books[currentGenre].concat([buf.name]);
    }
    // counts[buf.country] = (counts[buf.country] || 0) + 1;
    next();
  }

  function end(done) {
    console.log("--", books);
    // counter.setCounts(counts);
    done();
  }

  return combine(input, zlib.createGzip(books), process.stdout);
  // read newline-separated json
  // group books into genres,
  // then gzip the output
};
