const { save, User, infoUsers } = require('../models/user.model');
const addNewUser = (name, lastname, email) => {
    const newUser = new User(name, lastname, email);
    return save(newUser);
}

const ShowUsers = () => {
    return infoUsers();
}

module.exports = {
    addNewUser,
    ShowUsers
}