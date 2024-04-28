// imports express libary by creating a new router object
const router = require ('express').Router()

const {
    get10Games,
} = require('../controllers/Game')

//get 10 Games
router.post('/get10', get10Games)


module.exports = router
