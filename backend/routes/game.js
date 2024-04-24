// imports express libary by creating a new router object
const router = require ('express').Router()

const {
    getAllGames,
    getGameById,
    createGame,
    updateGame,
} = require('../controllers/Game')

//get all Games
router.get('/all', getAllGames)
//get Games by Id
router.get('/:id', getGameById)
//create new Food
router.post('/', createGame)

module.exports = router
