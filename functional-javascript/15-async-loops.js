function loadUsers(userIds, load, done) {
    completed = 0;
    var users = []

    userIds.forEach(function(userId, index) {
        load(userId, function (user) {
            users[index] = user;
            if(++completed === userIds.length) return done(users);
        })
    })
}

module.exports = loadUsers