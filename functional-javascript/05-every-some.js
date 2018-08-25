function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) {
      console.log(submittedUsers,'********');
    };
  }

module.exports = checkUsersValid