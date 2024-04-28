const router = require('express').Router()
const db = require("../models")

const{ VideoGames, Comment, User} = db

router.post('/', async(req, res) => {
    if(!req.body.pic){
        req.body.pic = ""
    }
    if(!req.body.Game){

        req.body.Game = "Game?"
    }
    if(!req.body.description){
        req.body.description = "Game?"

    }
    const GameList = await GameList.create(req.body)
    res.json(GameList)
})

router.get('/', async(req,res) => {
    const GameList = await GameList.findAll()
    res.json(GameList) 
})


router.get('/:gameId', async (req, res) => {
    let gameId = Number(req.params.gameId)
    if(isNaN(gameId)){
        res.status(404).json({message: `404"${gameId}"`})
    }else{
        const game = await game.findOne({
            where: { gameId: gameId },
            include: {
                association: 'comments',
                include: 'author'
            }
        })
        if (!game){
            res.status(404).json({ message: `Game not found "${gameId}"`})
        } else {
            res.json(game)
        }
    }
})

router.post('/:gameId/comments', async (req, res) => {
    const gameId = Number(req.params.gameId)

    req.body.rant = req.body.rant? true : false

    const game = await game.findOne({
        where: { gameId: gameId}
    })

    if(!game) {
        res.status(404).json({ message: ``})
    }
})

