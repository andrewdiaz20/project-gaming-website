// imports express libary by creating a new router object
const router = require ('express').Router()

const {
    get10Games,
    SearchResults,
    SearchResultsArtWork,
    get1Games,
} = require('../controllers/Game')

//get 10 Games
router.post('/get10', get10Games)
//Artwork
router.post('/art', SearchResultsArtWork)
//get SearchResults
router.post('/search', SearchResults)
//get 1 games
router.post('/get1', get1Games)

module.exports = router
