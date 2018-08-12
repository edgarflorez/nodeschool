const http = require('http');
const bl = require('bl');

const urls = [process.argv[2], process.argv[3], process.argv[4]];

const result = [];

for (let i = 0; i < urls.length; i++) {

  http.get(urls[i], function (response) {
    response.pipe(bl(function (err, data) {
      result[i] = data.toString();
      if (result[0] != undefined && result[1] != undefined && result[2] != undefined ){
        for (let j = 0; j < result.length; j++) {
          console.log(result[j]);
        }
      }

    }))
  });
}



/*
// Official solution
var http = require('http')
var bl = require('bl')
var results = []
var count = 0

function printResults () {
  for (var i = 0; i < 3; i++) {
    console.log(results[i])
  }
}

function httpGet (index) {
  http.get(process.argv[2 + index], function (response) {
    response.pipe(bl(function (err, data) {
      if (err) {
        return console.error(err)
      }

      results[index] = data.toString()
      count++

      if (count === 3) {
        printResults()
      }
    }))
  })
}

for (var i = 0; i < 3; i++) {
  httpGet(i)
}
*/
