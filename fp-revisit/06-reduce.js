let countWords = inputWords => {
  return inputWords.reduce(fromArrayToCounterObject, {});
};

let fromArrayToCounterObject = (accumulator, currentElement) => {
  accumulator[currentElement] = ++accumulator[currentElement] || 1;
  return accumulator;
};

module.exports = countWords;
