const Review = require('../models/Reviews')
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
        const review = await new Review(req.body).save()
        res.status(201).json(review)
    } catch (error) {
        console.log('error creating review', error)
        res.status(500).json({message: 'error creating review'})
    }
}




module.exports = {
    getAllReviews, getReviewById,
    createReview
}