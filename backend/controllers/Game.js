const Game = require('../models/Game')

async function getAllGames(req, res){
    try {
        const game= await Game.find()
        res.json(game)
    } catch (error){
        console.log('error getting all games', error)
        res.status(500).json({message: `error fetching all foods`})
    }
}

async function getGameById(req,res){
    try{
        const { id } = req.params
        const game = await Game.findById(id)
        res.json(game)
    } catch (error) {
        console.log('error fetching game by id  ', error)
        res.status(500).json({message: 'error fetching food'})
    }
}

async function createGame(req, res) {
    try{
        if(!req.body.game_picture) req.body.profilePicture = undefined
        const game = await new Game(req.body).save()
        res.status(201).json(game)
    } catch (error) {
        console.log('error creating game', error)
        res.status(500).json({message: 'error creating food'})
    }
}

//update route, figure out how to add authentication for user changing their own game and admin for page info 
async function updateGame(req, res) {
    try {
        const { id } = req.params;
        const updateData = req.body;
        const game = await Game.findByIdAndUpdate(id, updateData, {new: true})
        res.json(game)
    } catch (error) {
        console.log('error updating food', error)
        res.status(500).json({message: 'error updating food'})
    }
}

async function GameApi(req,res) {
    try {
        const searchTerm = req.body.search;
        const games = await Game.find({
            name: { $regex: searchTerm, $options: 'i' }  // 'i' for case insensitive
        })
        res.json(games)
    } catch (error) {
        console.error('Error searching games', error);
        res.status(500).json({message: 'Error searching games'})
    }
}

module.exports = {
    getAllGames,
    getGameById,
    createGame,
    updateGame,
    GameApi
    
}