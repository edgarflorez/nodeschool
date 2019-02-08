function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) {
        return submittedUsers.every( (user) =>{
            console.log("USER" ,user)
            return goodUsers.some( (goodUser) => {
                console.log("GOOD USER" ,goodUser, goodUser === user)
                return goodUser.id === user.id
            } )
        } )
    };
}

module.exports = checkUsersValid