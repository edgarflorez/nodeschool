var fs = require('fs')

var contents    = fs.readFileSync(process.argv[2],'utf8');
var lines       = contents.split('\n').length - 1;
console.log(lines);









/*
// Initial solution
console.log(fs.readFileSync(process.argv[2],'utf8').split('\n').length - 1 );
*/

/*
FS:     file:///Users/edgarflorez/.nvm/versions/node/v6.2.0/lib/node_modules/learnyounode/node_apidoc/fs.html
*/
