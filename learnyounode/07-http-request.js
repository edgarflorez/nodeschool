const http = require('http');

const url = process.argv[2];

http.get(url, function( response ){ 
    response.setEncoding('utf8');

    response.on('data', function(data){
        console.log(data);
    });

    response.on('error', function(e){
        console.log(e);
    })
}).on('error', function(e) {
    console.log("Got error: " + e.message);
});








/*
// Official Solution
var http = require('http')

http.get(process.argv[2], function (response) {
    response.setEncoding('utf8')
    response.on('data', console.log)
    response.on('error', console.error)
}).on('error', console.error)
*/