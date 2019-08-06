'use strict';

function attachTitle(title) {
    return 'DR. ' + title;
}

var promise = Promise.resolve('MANHATTAN');

promise
    .then(attachTitle)
    .then(console.log);




/* Official solution */
/*
'use strict';
    
function attachTitle(name) {
  return 'DR. ' + name;
}

Promise.resolve('MANHATTAN')
  .then(attachTitle)
  .then(console.log);
*/