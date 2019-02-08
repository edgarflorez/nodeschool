module.exports = function arrayMap(arr, fn) {
    return arr.reduce( function (accumulator, currentValue){
        accumulator.push(fn(currentValue));
        return accumulator;
    },[])
}