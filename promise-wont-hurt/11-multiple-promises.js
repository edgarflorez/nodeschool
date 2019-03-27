'use strict';

function all(promise1, promise2) {
    var promise = new Promise(function (fulfill, reject) {

        var counter = 0;
        var fulfillArray = [];

        function increaseCounter() {
            counter++;

            if(counter === 2){
                fulfill(fulfillArray);
            }
        }

        promise1.then(function (value) {
            fulfillArray[0] = value;
            increaseCounter();
        })
        
        promise2.then(function (value) {
            fulfillArray[1] = value;
            increaseCounter();
        })
    })

    return promise;
}

all(getPromise1(),getPromise2()).then(console.log);







/* Oficial solution */
//'use strict';

/* global getPromise1, getPromise2 */

/*
function all(a, b) {
    return new Promise(function (fulfill, reject) {
    var counter = 0;
    var out = [];

    a.then(function (val) {
        out[0] = val;
        counter++;

        if (counter >= 2) {
        fulfill(out);
        }
    });

    b.then(function (val) {
        out[1] = val;
        counter++;

        if (counter >= 2) {
        fulfill(out);
        }
    });
    });
}

all(getPromise1(), getPromise2())
    .then(console.log);
*/
