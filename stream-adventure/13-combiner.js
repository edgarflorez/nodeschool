var combine = require("stream-combiner");
let split = require("split");
const through = require("through2").obj;
const zlib = require("zlib");

module.exports = function() {
  const input = through(write, end);
  let current;

  function write(buf, _, next) {
    if (buf.length === 0) return next();
    const row = JSON.parse(buf);

    if (row.type === "genre") {
      if (current) {
        this.push(JSON.stringify(current) + "\n");
      }
      current = { name: row.name, books: [] };
    } else if (row.type === "book") {
      current.books.push(row.name);
    }
    next();
  }

  function end(done) {
    if (current) {
      this.push(JSON.stringify(current) + "\n");
    }
    done();
  }

  return combine(split(), input, zlib.createGzip());
};
