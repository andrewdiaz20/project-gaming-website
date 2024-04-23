const mongoose = require('mongoose')

const GameSchema = new mongoose.Schema({
    game_name: {
        type: String,
        required:true
    },
    game_picture: {
        type: String,
        required:true,
        default: ""
    },
    game_genre: {
        type: String,
        required:true
    },
    game_description: {
        type: String,
        required:true
    },
    game_release_date: {
        type: String,
        required:true
    },
    game_rating: {
        type: String,
        required:true
    },

})

module.exports = mongoose.model('VideoGames',GameSchema)