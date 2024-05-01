const mongoose = require('mongoose')

const ReviewSchema = new mongoose.Schema({
    userId: {
        type: String,
        required:true
    },
    author: {
        type: String,
        required:true,
        default: ""
    },
    content: {
        type: String,
        required:true
    },
    rating: {
        type: Number,
        required:true
    },
    date: {
        type: Number,
        required:true
    },
    gameId: {
        type: Number,
        required:true
    },

})

module.exports = mongoose.model('reviews',ReviewSchema)
