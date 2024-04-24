const mongoose = require('mongoose')

const FavoritedGameSchema = new mongoose.Schema({
    id: {
        type: String,
        required:true
    },
    gameId: {
        type: String,
        required:true,
        default: ""
    },
    userId: {
        type: String,
        required:true
    },


})

module.exports = mongoose.model('Comments',FavoritedGameSchema)