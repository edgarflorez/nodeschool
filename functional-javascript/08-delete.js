function duckCount() {
    return [...arguments].reduce( function (accumulatar, currentValue) {
        if(Object.prototype.hasOwnProperty.call(currentValue, 'quack')){
            accumulatar++
        }
        return accumulatar;
    },0);
}

module.exports = duckCount