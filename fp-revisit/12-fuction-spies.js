const spy = (target, method) => {
  const originalFunction = target[method];

  let spy = {
    count: 0
  };

  target[method] = () => {
    spy.count++;
    return originalFunction.call(target, arguments);
  };

  return spy;
};

module.exports = spy;
