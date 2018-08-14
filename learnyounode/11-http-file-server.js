const http = require('http');
const fs = require('fs');

const port = process.argv[2];
const file = process.argv[3];

const server = http.createServer( function (request, response) {

    const fileStream  = fs.createReadStream(file);

    fileStream.on('open', function () {
        fileStream.pipe(response);
    })

    fileStream.on('error', function(error){
        response.end(error);
    })


} )
server.listen(port);







/*
// Official Solution
var http = require('http')
var fs = require('fs')

var server = http.createServer(function (req, res) {
    res.writeHead(200, { 'content-type': 'text/plain' })

    fs.createReadStream(process.argv[3]).pipe(res)
})

server.listen(Number(process.argv[2]))
*/