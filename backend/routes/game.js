// imports express libary by creating a new router object
const router = require ('express').Router()
const axios = require('axios');

const {
    getAllGames,
    getGameById,
    createGame,
    updateGame,
    GameApi
} = require('../controllers/Game')

//get all Games
router.get('/all', getAllGames)
//get Games by Id
router.get('/:id', getGameById)
//create new Food
router.post('/', createGame)
//grab from api
router.post('/searchGame2', GameApi)

module.exports = router
