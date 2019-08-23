function doubleAll(numbers) {
  return numbers.map(doubleNumber);
}

function doubleNumber(number) {
  return number * 2;
}

module.exports = doubleAll;
