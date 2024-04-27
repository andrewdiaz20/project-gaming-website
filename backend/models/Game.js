const mongoose = require('mongoose')

const VideoGamesSchema = new mongoose.Schema({
    VideoGames_name: {
        type: String,
        required:true
    },
    VideoGames_picture: {
        type: String,
        required:true,
        default: ""
    },
    VideoGames_genre: {
        type: String,
        required:true
    },
    VideoGames_description: {
        type: String,
        required:true
    },
    VideoGames_release_date: {
        type: String,
        required:true
    },
    VideoGames_rating: {
        type: String,
        required:true
    },

})

module.exports = mongoose.model('VideoGames',VideoGamesSchema)