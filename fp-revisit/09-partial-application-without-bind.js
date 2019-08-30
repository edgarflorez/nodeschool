var slice = Array.prototype.slice;

let logger = namespace => (...arguments) => {
  console.log.apply(console, [namespace].concat(arguments));
};

module.exports = logger;
