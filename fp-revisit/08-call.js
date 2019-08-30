function duckCount(...arguments) {
  const filterElementByQuackProperty = element => {
    return Object.prototype.hasOwnProperty.call(element, "quack");
  };

  return arguments.filter(filterElementByQuackProperty).length;
}

module.exports = duckCount;
