module.exports = function Spy(target, method) {
    var originalFunction = target[method];

    var spy = {
        count: 0,
        args: []
    }

    target[method] = function () {
        let args = [].slice.apply(arguments);
        spy.count++;
        spy.args.push(args);
        return originalFunction.apply(this, args);
    }

    return spy;
}







/*
function Spy(target, method) {
    var originalFunction = target[method]
  
    // use an object so we can pass by reference, not value
    // i.e. we can return result, but update count from this scope
    var result = {
      count: 0
    }
  
    // replace method with spy method
    target[method] = function() {
      result.count++ // track function was called
      return originalFunction.apply(this, arguments) // invoke original function
    }
  
    return result
  }
  
  module.exports = Spy
  */