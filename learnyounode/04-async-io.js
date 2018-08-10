const fs = require('fs');
const file = process.argv[2];

fs.readFile( file, 'utf8', (err, data) => {
    if(err) return console.log(err);

    const lines = data.split('\n').length - 1
    console.log(lines);
})









/*
// Official solution
var fs = require('fs')
var file = process.argv[2]

fs.readFile(file, function (err, contents) {
    if (err) {
    return console.log(err)
    }
    // fs.readFile(file, 'utf8', callback) can also be used
    var lines = contents.toString().split('\n').length - 1
    console.log(lines)
})
*/

/*
FS:     file:///Users/edgarflorez/.nvm/versions/node/v6.2.0/lib/node_modules/learnyounode/node_apidoc/fs.html
*/
