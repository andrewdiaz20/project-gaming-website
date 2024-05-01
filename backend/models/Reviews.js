const mongoose = require('mongoose')

const ReviewSchema = new mongoose.Schema({
    id: {
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
        type: String,
        required:true
    },
    gameId: {
        type: String,
        required:true
    },

})

module.exports = mongoose.model('Review',ReviewSchema)
