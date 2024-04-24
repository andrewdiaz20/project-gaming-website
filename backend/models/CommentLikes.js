const mongoose = require('mongoose')

const CommentLikesSchema = new mongoose.Schema({
    id: {
        type: String,
        required:true
    },
    commentId: {
        type: String,
        required:true,
        default: ""
    },
    author: {
        type: String,
        required:true
    },


})

module.exports = mongoose.model('Comments',CommentLikesSchema)