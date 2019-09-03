function repeat(operation, num) {
  const eventLoopRelease = 100;

  if (num <= 0) return;

  operation();

  if (num % eventLoopRelease === 0) {
    setTimeout(repeat, 0, operation, --num);
  } else {
    repeat(operation, --num);
  }
}

module.exports = repeat;
