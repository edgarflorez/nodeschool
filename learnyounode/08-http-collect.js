const http = require('http');
const bl = require('bl');

const url = process.argv[2];

http.get(url, function (response) {
  response.pipe(bl(function (err, data) {
    data = data.toString();
    console.log(data.length);
    console.log(data);
  }))
});
/*
run $ npm install bl
*/








/*
// Basic approach
http.get( url, function( response ){

  let str =  '';
  response.setEncoding('utf8');

  response.on('data', function(data){
    str += data;
  });

  response.on('error', function(error){
    console.log(error);
  });

  response.on('end', function (end) {
    console.log(str.length);
    console.log(str);
  })

});
*/









/*
// Official solution
var http = require('http')
var bl = require('bl')

http.get(process.argv[2], function (response) {
  response.pipe(bl(function (err, data) {
    if (err) {
      return console.error(err)
    }
    data = data.toString()
    console.log(data.length)
    console.log(data)
  }))
})
*/
