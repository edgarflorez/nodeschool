function checkUsersValid(goodUsers) {
  return function(submittedUsers) {
    return submittedUsers.every(validateWithGoodUsers);
  };

  function validateWithGoodUsers(submittedUser) {
    return goodUsers.some(goodUser => {
      return goodUser.id === submittedUser.id;
    });
  }
}
module.exports = checkUsersValid;
