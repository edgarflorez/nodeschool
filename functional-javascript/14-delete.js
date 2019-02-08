function repeat(operation, num) {
    // Modify this so it doesn't cause a stack overflow!
    if (num <= 0) return
    return function(){
        operation()
        return repeat(operation, --num)
    }
}

function trampoline(fn) {
    
    while(fn && typeof fn === 'function'){
        return function(){
            return fn();
        }
    }
}

module.exports = function(operation, num) {
    // You probably want to call your trampoline here!
    return trampoline(repeat(operation, num));
}




/* OFFICIAL SOLUTION */

/*
 function repeat(operation, num) {
      return function() {
        if (num <= 0) return
        operation()
        return repeat(operation, --num)
      }
    }
    
    function trampoline(fn) {
      while(fn && typeof fn === 'function') {
        fn = fn()
      }
    }
    
    module.exports = function(operation, num) {
      trampoline(function() {
        return repeat(operation, num)
      })
    }

*/




























/*
function repeat(operation, num) {
    // Modify this so it doesn't cause a stack overflow!
    if (num <= 0) return
    operation()
    return () => repeat(operation, --num)
}

// function trampoline(fn) {
    // You probably want to implement a trampoline!
// }

const trampoline = fn => (...args) => {
    let result = fn(...args)

    while (typeof result === 'function') {
        result = result()
    }

    return result
}

module.exports = function(operation, num) {
    // You probably want to call your trampoline here!
    const repeatTrampoline = trampoline(repeat);
    return repeatTrampoline(num);
}

*/