const router = require('express').Router()
const db = require("../models")

const{ Game, Comment, User} = db

router.post('/', async(req, res) => {
    if(!req.body.pic){
        req.body.pic = ""
    }
    if(!req.body.Game){
        req.body.Game = ""
    }
    if(!req.body.description){
        req.body.description = ""
    }
    const GameList = await GameList.create(req.body)
    res.json(GameList)
})

router.get('/', async(req,res) => {
    const GameList = await GameList.findAll()
    res.json(GameList) 
})

