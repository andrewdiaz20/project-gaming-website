//Data Models

const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {
        userName: { type: String, required: true },
        firstName: { type: String, required: true },
        lastName: { type: String, required: true }
    },
    email: {
        type: String,
        required: true,
        unqiue: true,
    },
    password: {
        type: String,
        required:true
    },
    role: {
        type: String,
        enum: ['user', 'admin'], // enum means string objects
        default: 'user'
    }
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('User', UserSchema)