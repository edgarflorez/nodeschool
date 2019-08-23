function repeat(operation, numberOfIterations) {
  if (numberOfIterations < 0) return;

  operation();
  repeat(operation, --numberOfIterations);
}

module.exports = repeat;
