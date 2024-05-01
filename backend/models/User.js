//Data Models

const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({

    name: {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true }
    },
    userName: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unqiue: true,
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['user', 'admin'], // enum means string objects
        default: 'user'

    },
    location: {
        type: String,
        required: false,
        unique: false,
    },
    about: {
        type: String,
        required: false,
        unique: false,
    },
    createdAt: {
        type: Date,
        default: Date.now

    },
});


module.exports = mongoose.model('User', UserSchema)