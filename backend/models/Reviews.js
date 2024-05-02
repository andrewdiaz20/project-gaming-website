const mongoose = require('mongoose')
const ObjectId = require('mongodb').ObjectId;

const ReviewSchema = new mongoose.Schema({
    userId: {
        type: ObjectId,
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
        type: ObjectId,
        required:false
    },
    externalGameId: {
        type: String,
        required:false
    },
})

module.exports = mongoose.model('reviews',ReviewSchema)
