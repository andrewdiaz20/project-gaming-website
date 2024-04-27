const VideoGames = require('../models/Game')

async function getAllVideoGamess(req, res){
    try {
        const VideoGames= await VideoGames.find()
        res.json(VideoGames)
    } catch (error){
        console.log('error getting all VideoGamess', error)
        res.status(500).json({message: `error fetching all foods`})
    }
}

async function getVideoGamesById(req,res){
    try{
        const { id } = req.params
        const VideoGames = await VideoGames.findById(id)
        res.json(VideoGames)
    } catch (error) {
        console.log('error fetching VideoGames by id  ', error)
        res.status(500).json({message: 'error fetching food'})
    }
}

async function createVideoGames(req, res) {
    try{
        if(!req.body.VideoGames_picture) req.body.profilePicture = undefined
        const VideoGames = await new VideoGames(req.body).save()
        res.status(201).json(VideoGames)
    } catch (error) {
        console.log('error creating VideoGames', error)
        res.status(500).json({message: 'error creating food'})
    }
}

//update route, figure out how to add authentication for user changing their own VideoGames and admin for page info 
async function updateVideoGames(req, res) {
    try {
        const { id } = req.params;
        const updateData = req.body;
        const VideoGames = await VideoGames.findByIdAndUpdate(id, updateData, {new: true})
        res.json(VideoGames)
    } catch (error) {
        console.log('error updating food', error)
        res.status(500).json({message: 'error updating food'})
    }
}

module.exports = {
    getAllVideoGamess,
    getVideoGamesById,
    createVideoGames,
    updateVideoGames,
    
}