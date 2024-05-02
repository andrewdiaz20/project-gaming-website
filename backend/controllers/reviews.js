const Review = require('../models/Reviews')
const ObjectId = require('mongodb').ObjectId;
const Game = require('../models/Game');

async function getAllReviews(req, res){
    try {
        const reviews = await Review.find()
        res.json(reviews)
    } catch (error) {
        console.log('error fetching all reviews', error)
        res.status(500).json({message: 'error fetching all animals'})
    }
}

async function getReviewById(req, res){
    try {
        const { id } = req.params
        const review = await Review.findById(id)
        res.json(review)
    } catch (error) {
        console.log('error fetching review', error)
        res.status(500).json({message: 'error fetching review'})
    }
}

async function createReview(req,res) {
    try {
        let body = req.body;
        const { userId, externalGameId, VideoGames_name, VideoGames_description } = req.body;
        console.log('datas', userId, externalGameId, VideoGames_name, VideoGames_description);
        
        let existingGame = await Game.findOne({
            externalGameId: externalGameId,
        });

        console.log('existingGame1', existingGame);

        if (!existingGame) {
          const game = new Game({
            externalGameId: externalGameId,
            VideoGames_name: VideoGames_name,
            VideoGames_description: VideoGames_description
          });
      
          existingGame = await game.save();
          console.log('existingGame2', existingGame);
        }

        let reviewData = {
            ...body,
            author: userId,
            userId: new ObjectId(userId),
            gameId: existingGame._id,
        }
          const review = await new Review(reviewData).save()
        res.status(201).json(review)
    } catch (error) {
        console.log('error creating review', error)
        res.status(500).json({message: 'error creating review'})
    }
}




module.exports = {
    getAllReviews, getReviewById,
    createReview,
}