const mongoose = require('mongoose')

const ReviewLikeSchema = new mongoose.Schema({
    id: {
        type: String,
        required:true
    },
    reviewId: {
        type: String,
        required:true,
        default: ""
    },
    author: {
        type: String,
        required:true
    },


})

module.exports = mongoose.model('Comments',ReviewLikeSchema)