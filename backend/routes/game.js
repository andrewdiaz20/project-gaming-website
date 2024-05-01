// imports express libary by creating a new router object
const router = require ('express').Router()

const {
    get10Games,
    SearchResults,
} = require('../controllers/Game')

//get 10 Games
router.post('/get10', get10Games)
//Artwork

//get SearchResults
router.post('/search', SearchResults)


module.exports = router
