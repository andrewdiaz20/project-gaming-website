const mongoose = require('mongoose')
const ObjectId = require('mongodb').ObjectId;

const FavoritedGameSchema = new mongoose.Schema({
    gameId: {
        type: ObjectId,
        required:true,
        default: ""
    },
    externalGameId: {
        type: String,
        required:true,
        default: ""
    },
    userId: {
        type: ObjectId,
        required:true
    },


})

module.exports = mongoose.model('FavoritedGame',FavoritedGameSchema)