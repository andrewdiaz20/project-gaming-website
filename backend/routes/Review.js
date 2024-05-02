const router = require('express').Router()

const {
    getReviewsByUser,
    getReviewsByGameExId
} = require ('../controllers/Review')

router.get('/getReviewsByUser', getReviewsByUser)
router.get('/getReviewsByGameExId', getReviewsByGameExId)


module.exports = router;
