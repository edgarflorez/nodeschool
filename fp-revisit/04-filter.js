function getShortMessages(messages) {
  return messages.map(extractMessage).filter(filterShortMessage);
}

function extractMessage(message) {
  return message.message;
}

function filterShortMessage(message) {
  return message.length < 50;
}

module.exports = getShortMessages;
