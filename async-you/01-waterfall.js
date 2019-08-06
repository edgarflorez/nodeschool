const http = require("http");
const async = require("async");
const fs = require("fs");

const filePath = process.argv[2];

async.waterfall(
  [
    function(done) {
      fs.readFile(filePath, "utf8", (err, data) => {
        if (err) return console.log(err);
        done(null, data);
      });
    },

    function(data, done) {
      let body = "";
      http.get(data, function(response) {
        response.setEncoding("utf8");

        response.on("data", function(data) {
          body += data.toString();
        });

        response.on("end", function() {
          done(null, body);
        });
      });
    }
  ],
  function done(err, result) {
    if (err) return console.log(err);
    console.log(result);
  }
);

/**
 * Official solution
 */
/*
var fs = require("fs"),
  http = require("http"),
  async = require("async");

async.waterfall(
  [
    function(done) {
      fs.readFile(process.argv[2], function(err, data) {
        if (err) return done(err);
        done(null, data);
      });
    },

    function(data, done) {
      var body = "";
      http
        .get(data.toString().trimRight(), function(res) {
          res.on("data", function(chunk) {
            body += chunk.toString();
          });

          res.on("end", function(chunk) {
            done(null, body);
          });
        })
        .on("error", function(e) {
          done(e);
        });
    }
  ],
  function done(err, result) {
    if (err) return console.error(err);
    console.log(result);
  }
);
*/
