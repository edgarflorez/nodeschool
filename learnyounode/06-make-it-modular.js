const myModule = require('./06-make-it-modular-module');

const folder = process.argv[2];
const ext = process.argv[3];

myModule(folder, ext, function (error, data) {
  if (error) return console.log(error);

  data.forEach(function (file) {
    console.log(file)
  })
});

/*
// Official solution

const filterFn = require('./solution_filter.js')
const dir = process.argv[2]
const filterStr = process.argv[3]

filterFn(dir, filterStr, function (err, list) {
  if (err) {
    return console.error('There was an error:', err)
  }

  list.forEach(function (file) {
    console.log(file)
  })
})
*/
