function getShortMessages(messages) {
    return messages.filter(function(message){
        return message.message.length < 50;
    }).map(function(message){
        return message.message;
    })
}

module.exports = getShortMessages








/*
// Official solution
module.exports = function getShortMessages(messages) {
    return messages.filter(function(item) {
      return item.message.length < 50
    }).map(function(item) {
      return item.message
    })
}
*/
