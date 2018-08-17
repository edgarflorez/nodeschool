const http = require('http');
const url = require('url');

const port = process.argv[2];

const server = http.createServer( function (request, response) {
    
    if(request.method !== 'GET'){
        return response.end('send me a GET\n')
    }
    
    const urlObject = url.parse( request.url, true );
    const queryDate = new Date(urlObject.query.iso);
    let objDate = {}

    response.writeHead(200, { 'Content-Type': 'application/json' });

    switch (urlObject.pathname) {
        case '/api/parsetime':
            objDate.hour = queryDate.getHours();
            objDate.minute = queryDate.getMinutes();
            objDate.second = queryDate.getSeconds();
            break;
            
        case '/api/unixtime':
            objDate.unixtime = queryDate.getTime();
            break;
    
        default:
            break;
    }

    response.end( JSON.stringify(objDate));

} )
server.listen(port);







/*
// Official solution
var http = require('http');
var url = require('url');

var routes = {
  "/api/parsetime": function(parsedUrl) {
    d = new Date(parsedUrl.query.iso);
    return {
      hour: d.getHours(),
      minute: d.getMinutes(),
      second: d.getSeconds()
    };
  },
  "/api/unixtime": function(parsedUrl) {
    return {unixtime: (new Date(parsedUrl.query.iso)).getTime()};
  }
}

server = http.createServer(function(request, response) {
  parsedUrl = url.parse(request.url, true);
  resource = routes[parsedUrl.pathname];
  if (resource) {
    response.writeHead(200, {"Content-Type": "application/json"});
    response.end(JSON.stringify(resource(parsedUrl)));
  }
  else {
    response.writeHead(404);
    response.end();
  }
});
server.listen(process.argv[2]);
*/