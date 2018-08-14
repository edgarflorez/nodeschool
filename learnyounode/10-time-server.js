const net = require('net');
const strftime = require('strftime');
const portNumber = process.argv[2];

const server = net.createServer(function (socket) {
  const date = new Date();
  socket.end( strftime('%Y-%m-%d %H:%M', date) + '\n' );
})
server.listen(portNumber);
/*
Doc Net   : file:///usr/local/lib/node_modules/learnyounode/node_apidoc/net.html#net_net_createserver_options_connectionlistener
strftiem  : https://github.com/samsonjs/strftime
            npm install strftime
*/








/*
// Official solution
var net = require('net')

function zeroFill (i) {
  return (i < 10 ? '0' : '') + i
}

function now () {
  var d = new Date()
  return d.getFullYear() + '-' +
    zeroFill(d.getMonth() + 1) + '-' +
    zeroFill(d.getDate()) + ' ' +
    zeroFill(d.getHours()) + ':' +
    zeroFill(d.getMinutes())
}

var server = net.createServer(function (socket) {
  socket.end(now() + '\n')
})

server.listen(Number(process.argv[2]))
*/
