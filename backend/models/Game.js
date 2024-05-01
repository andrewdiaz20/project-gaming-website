const mongoose = require('mongoose')

const VideoGamesSchema = new mongoose.Schema({
    VideoGames_name: {
        type: String,
        required:true
    },
    VideoGames_genre: {
        type: String,
        required:false
    },
    VideoGames_description: {
        type: String,
        required:false
    },
    VideoGames_release_date: {
        type: String,
        required:false
    },
    VideoGames_rating: {
        type: String,
        required:false
    },
    externalGameId: {
        type: String,
        required:true
    },
})

module.exports = mongoose.model('VideoGames',VideoGamesSchema)