// imports express libary by creating a new router object
const router = require ('express').Router()

const {
    get10Games,
    SearchResults,
    SearchResultsArtWork,
} = require('../controllers/Game')

//get 10 Games
router.post('/get10', get10Games)
//Artwork
router.post('/art', SearchResultsArtWork)
//get SearchResults
router.post('/search', SearchResults)


module.exports = router
