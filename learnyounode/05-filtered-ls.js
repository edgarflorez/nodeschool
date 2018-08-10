const fs = require('fs');
const path = require('path');

const folder = process.argv[2];
const extension = '.'+process.argv[3];

fs.readdir(folder, (err, files) => {
    if(err) return console.log(err);

    files.forEach( (file) =>{
        if(path.extname( file ) === extension){
            console.log(file);
        }
    })
})










/*
// Official solution
var fs = require('fs')
var path = require('path')

var folder = process.argv[2]
var ext = '.' + process.argv[3]

fs.readdir(folder, function (err, files) {
    if (err) return console.error(err)
    files.forEach(function (file) {
    if (path.extname(file) === ext) {
        console.log(file)
    }
    })
})
*/

/*
PATH:   file:///Users/edgarflorez/.nvm/versions/node/v6.2.0/lib/node_modules/learnyounode/node_apidoc/path.html#path_path_extname_p
FS:     file:///Users/edgarflorez/.nvm/versions/node/v6.2.0/lib/node_modules/learnyounode/node_apidoc/fs.html
*/
