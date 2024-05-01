const mongoose = require('mongoose')

const ReviewSchema = new mongoose.Schema({
    userId: {
        type: String,
        required:false
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
        type: String,
        required:false
    },
    gameId: {
        type: Number,
        required:false
    },

})

module.exports = mongoose.model('reviews',ReviewSchema)
