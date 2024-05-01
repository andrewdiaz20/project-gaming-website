const router = require('express').Router()

const {
    getReviewsByUser
} = require ('../controllers/Review')

router.get('/getReviewsByUser', getReviewsByUser)

module.exports = router;
