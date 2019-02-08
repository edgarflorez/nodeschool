function countWords(inputWords) {
    var obj = inputWords.reduce( (accumulator, currentValue) => {
        if (currentValue in accumulator) {
            accumulator[currentValue]++;
        }
        else {
            accumulator[currentValue] = 1;
        }
        return accumulator;
    }, {});

    console.log("*****",obj)

    return obj;
}

module.exports = countWords