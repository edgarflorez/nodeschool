function alwaysThrows() {
    throw new Error('OH NOES');
}

function iterate(value = 1) {
    console.log(value);
    return value + 1;
}

var promise = Promise.resolve();
promise
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(alwaysThrows)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(null, function (e) {
        console.log(e.message)
    });

/*
If you are **not** returning a value from your promise to a caller,
then attach a `done` handler to guard against uncaught exceptions.
*/

/*Official solution */
/*
'use strict';
    
function iterate(num) {
    console.log(num);
    return num + 1;
}

function alwaysThrows() {
    throw new Error('OH NOES');
}

function onReject(error) {
    console.log(error.message);
}

Promise.resolve(iterate(1))
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(alwaysThrows)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.catch(onReject);
*/