function countWords(inputWords) {
    let returnObj = {}

    returnObj[inputWords[0]] = 1;

    const reducer = (accumulator, currentValue) =>{
        returnObj[currentValue] = (returnObj[currentValue])? returnObj[currentValue] + 1 : 1;
    } 

    inputWords.reduce(reducer);

    return returnObj;
}

module.exports = countWords







/*
// Official solution 
function countWords(arr) {
    return arr.reduce(function(countMap, word) {
        countMap[word] = ++countMap[word] || 1 // increment or initialize to 1
        return countMap
    }, {}) // second argument to reduce initialises countMap to {}
}

module.exports = countWords
*/
