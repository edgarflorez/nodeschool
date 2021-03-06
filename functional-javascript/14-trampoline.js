function repeat(operation, num) {
    // Modify this so it doesn't cause a stack overflow!
    if (num <= 0) return
    return function(){
        operation()
        return repeat(operation, --num);
    }
}

function trampoline(fn) {
    // You probably want to implement a trampoline!
    while(fn && typeof fn  === 'funciton '){
        fn = fn();
    }
}

module.exports = function(operation, num) {
    // You probably want to call your trampoline here!
    trampoline(function(){
        return repeat(operation, num);
    })
}

// Resources 
// http://raganwald.com/2013/03/28/trampolines-in-javascript.html
// https://www.oreilly.com/library/view/functional-javascript/9781449360757/ch01.html








// Official solution
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