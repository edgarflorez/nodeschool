module.exports = (inputArray, inputFunction) => {
  return inputArray.reduce((accumulator, item) => {
    accumulator.push(inputFunction(item));
    return accumulator;
  }, []);
};
