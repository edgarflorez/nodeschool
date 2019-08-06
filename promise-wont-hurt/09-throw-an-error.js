'use strict';

var validJson  = process.argv[2];

function parsePromised(json) {
    return new Promise(function (resolve, reject) {
        try {
            resolve(JSON.parse(json));
        } catch (error) {
            reject(error);
        }
    })
}

function onReject(error) {
    console.log(error.message);
}

parsePromised(validJson)
    .then(null, onReject);