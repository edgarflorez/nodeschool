function getShortMessages(messages) {
    console.log("**",messages.length);
    messages.filter(function(message){
        return message.message.length < 50;
    });
    console.log("---",messages.length);
  }

  module.exports = getShortMessages