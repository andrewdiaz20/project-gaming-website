const router = require('express').Router()

const {
    getAllReviews,
    getReviewById,
    createReview
} = require('../controllers/reviews')

//get all comments
router.get('/all', getAllReviews)

//get comment by id 
router.get('/:id', getReviewById)

//create comment
router.post('/createreview', createReview)

module.exports = router