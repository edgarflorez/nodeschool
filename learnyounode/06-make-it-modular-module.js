const path = require('path');
const fs = require('fs');

module.exports = function (folder, ext, callback) {
    fs.readdir(folder, function (error, files) {
      if (error) {
          return callback(error);
      }

      files = files.filter(function (file) {
        return path.extname(file) === '.' + ext
      })

      callback(null, files)
    })
}

/*
// Official solution
const fs = require('fs')
const path = require('path')

module.exports = function (dir, filterStr, callback) {
  fs.readdir(dir, function (err, list) {
    if (err) {
      return callback(err)
    }

    list = list.filter(function (file) {
      return path.extname(file) === '.' + filterStr
    })

    callback(null, list)
  })
}
*/
