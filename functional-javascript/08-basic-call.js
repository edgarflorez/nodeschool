function duckCount(...args) {
    return args.filter( arg => Object.prototype.hasOwnProperty.call(arg, 'quack') ).length;
}

module.exports = duckCount;









/*
// Official solution 
function duckCount() {
    return Array.prototype.slice.call(arguments).filter(function(obj) {
    return Object.prototype.hasOwnProperty.call(obj, 'quack')
    }).length
}

module.exports = duckCount
*/