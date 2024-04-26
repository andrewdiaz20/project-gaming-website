const router = require('express').Router()

const {
    signUp,
    login,
} = require ('../controllers/User')

const express = require('express');
const User = require('../models/User');

router.post('/check-account', async (req, res) => {
    const { username } = req.body
    const user = await User.findOne({username})
    if (user) {
        res.json({message: 'User already exists'})
    }
})

router.post('/signup', signUp)
router.post('/login', login)

module.exports = router;