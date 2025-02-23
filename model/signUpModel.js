const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({

    UserName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, {
    timeStamp: true
})


const user = mongoose.model("user", UserSchema);
module.exports = user;
