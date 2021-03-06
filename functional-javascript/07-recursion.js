/*function reducer(arr, fn, initial) {

    return ( function reduceOne(index, value){
        if(index > arr.length - 1) return value;
        return  reduceOne(index + 1, fn( value, arr[index], index, arr ) ) 
    })(0,initial);

}

module.exports = reducer;
*/


/*
function reduce(arr, fn, initial) {

    return arr.reduce( fn, initial );

}

module.exports = reduce;
*/



/*
// Official solution 
function reduce(arr, fn, initial) {
    return (function reduceOne(index, value) {
    if (index > arr.length - 1) return value // end condition
    return reduceOne(index + 1, fn(value, arr[index], index, arr)) // calculate & pass values to next step
    })(0, initial) // IIFE. kick off recursion with initial values
}
*/




function reduce(arr, fn, initial) {

    const [head, ...tail] = arr;
    if(head === undefined){
        return initial
    }
    return reduce(tail, fn, fn(initial, head));

    return arr.reduce( fn, initial );

}

module.exports = reduce;