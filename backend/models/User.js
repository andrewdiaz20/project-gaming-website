//Data Models

const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    userid: {
        type: integer
    },
    username: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required:true
    },
    password: {
        type: String,
        required:true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('User', UserSchema)