const mongoose = require('mongoose')

const CommentSchema = new mongoose.Schema({
    id: {
        type: String,
        required:true
    },
    review: {
        type: String,
        required:true,
        default: ""
    },
    author: {
        type: String,
        required:true
    },
    date: {
        type: String,
        required:true
    },
    content: {
        type: String,
        required:true
    },


})

module.exports = mongoose.model('Comments',CommentSchema)