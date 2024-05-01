const Comments = require('../models/Comments')
const { default: axios } = require('axios')


async function getAllComments(req, res){
    try {
        const comments = await Comments.find()
        res.json(comments)
    } catch (error) {
        console.log('error fetching all comments', error)
        res.status(500).json({message: 'error fetching all animals'})
    }
}

async function getCommentById(req, res){
    try {
        const { id } = req.params
        const comment = await Comments.findById(id)
        res.json(comment)
    } catch (error) {
        console.log('error fetching animal', error)
        res.status(500).json({message: 'error fetching comment'})
    }
}

async function createComment(req,res) {
    try {
        if (!req.body.profilePicture) req.body.profilePicture = undefined
        const comment = await new Comments(req.body).save()
    } catch (error) {
        console.log('error creating comment', error)
        res.status(500).json({message: 'error creating comment'})
    }
}

module.exports = {
    getAllComments, getCommentById,
    createComment
}