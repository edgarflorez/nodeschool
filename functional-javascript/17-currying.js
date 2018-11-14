function curryN(fn, n) {
    let numParams = fn.length | n;
    
    function myFn(prev){
        return function(arg){

            var args = prev.concat(arg);

            if( args.length < numParams ) {
                return myFn(args);
            }
            else{
                return fn.apply(this, args);
            }
        }
    }

    return myFn([]);

}
module.exports = curryN;


    // JavaScript ES6 curry functions with practical examples
// https://medium.com/front-end-hacking/javascript-es6-curry-functions-with-practical-examples-6ba2ced003b1

    // 8 steps to turn imperative JavaScript class to a functional declarative code
// https://medium.com/front-end-hacking/8-steps-to-turn-imperative-javascript-class-to-a-functional-declarative-code-862964faf46c








/*
// Official Solution

function curryN(fn, n) {
    n = n || fn.length
    return function curriedN(arg) {
    if (n <= 1) return fn(arg)
    return curryN(fn.bind(this, arg), n - 1)
    }
}

module.exports = curryN

*/