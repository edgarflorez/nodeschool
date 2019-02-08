function curryN(fn, n) {
    // console.log(fn.toString();
    if(fn.length <= n){
        fn(...arguments);
    }

    let myArguments = [];
    n = n || fn.length;
    return function curryFn(arg){
        myArguments.push(arg);
        if(n === myArguments.length){
            return fn(...myArguments);
        }else{
            return curryFn;
        }
    }
}

module.exports = curryN;

/*
Example
function curryN(fn, n) {
    debugger
    n = n || fn.length;
    return function curriedN(arg) {
        if( n <= 1 ) return fn(arg);
        return curryN(fn.bind(this, arg), n -1);
    }
}

function foo(a, b, c) {
    console.log(a/b/c);
}

let  myCurry  = curryN(foo)(6)(3)(2);
*/

/*
'curryA(10) => function curryFn(arg){\n        myArguments.push(arg);\n        if(n === myArguments.length){\n            return fn(...myArguments);\n        }else{\n            return curryFn;\n        }\n    }'

'curryA(10) => 13'

'1,2,3,4', 'Testing we can change the inner function to generate different set of outputs:', [Function: curryFn],
'1,2,3,4', 'Testing we can change the inner function to generate different set of outputs:', '1,6,3,5'
*/

/*
function abc(one, two, three) {
  return one/two/three
}
console.log(curryN(abc)(6)(3)(2))
*/