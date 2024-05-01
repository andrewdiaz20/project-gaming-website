const router = require('express').Router()

const {
    getAllComments,
    getCommentById,
    createComment
} = require('../controllers/Comments')

//get all comments
router.get('/all', getAllAnimals)

//get comment by id 
router.get('/:id', getCommentById)

//create comment
router.post('/', createComment)

module.exports = router