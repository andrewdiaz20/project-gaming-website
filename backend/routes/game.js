// imports express libary by creating a new router object
const router = require ('express').Router()

const {
    get10Games,
    SearchResults,
    SearchResultsArtWork,
    get1Games,
    favoriteGame
} = require('../controllers/Game')

const { getFavoritedGameByUser } = require('../controllers/FavoritedGames');

//get 10 Games
router.post('/get10', get10Games)
//Artwork

//get SearchResults
router.post('/search/:searchTerm', SearchResults)
//get 1 games
router.post('/get1', get1Games)

router.post('/favoriteGame', favoriteGame);
router.get('/getFavoritedGameByUser', getFavoritedGameByUser);

module.exports = router
