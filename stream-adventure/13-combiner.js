var combine = require("stream-combiner");
let split = require("split");
const through = require("through2").obj;
const zlib = require("zlib");

module.exports = function() {
  let input = through(write, end);
  /*
  let books = {};
  let input = through(write, end);
  let currentGenre;
  let booksByGenre;
  let counter = 0;
  */

  let books = {};
  let currentGenre;

  function write(buf, _, next) {
    // this.push(buf.toString().toUpperCase());
    buf = JSON.parse(buf);
    if (buf.type == "genre") {
      currentGenre = buf.name;
      books[currentGenre] = [];
    } else {
      books[currentGenre] = books[currentGenre].concat([buf.name]);
    }
    // this.push(JSON.stringify(books));
    console.log("------------");
    next();
    /*
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
    */
  }

  function end(done) {
    // this.push(books);
    console.log("***********************");
    // console.log(this);
    return done();
  }
  function flush(callback) {
    this.push(this.total);
    return callback();
  }

  return combine(split(), input, process.stdout);
  // read newline-separated json
  // group books into genres,
  // then gzip the output
};
