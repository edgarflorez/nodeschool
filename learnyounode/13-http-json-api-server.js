const http = require('http');
const url = require('url');

const port = process.argv[2];

const server = http.createServer( function (request, response) {
    const urlObject = url.parse( request.url, true );

    //console.log(urlObject);

    if(request.method !== 'GET'){
        return response.end('send me a GET\n')
    }

    response.writeHead(200, { 'Content-Type': 'application/json' })

    switch (urlObject.pathname) {
        case '/api/parsetime':
            console.log(urlObject);
            break;
            
        case '/api/unixtime':
            console.log(urlObject);
            break;
    
        default:
            break;
    }

    response.end();



} )
server.listen(port);