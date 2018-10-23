function checkUsersValid(goodUsers) {
    return function (users) {
      
      return users.every(function(user) {
        return goodUsers.some(function(goodUser) {
          return goodUser.id === user.id
        })
      })

    };
  }

module.exports = checkUsersValid







/*
// Official solution

module.exports = function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    return submittedUsers.every(function(submittedUser) {
      return goodUsers.some(function(goodUser) {
        return goodUser.id === submittedUser.id
      })
    })
  }
}
*/