const bcrypt = require('bcrypt')
const User = require('../models/User')
const app = require('../express')
const jwt = require('jsonwebtoken')

const JWT_SECRET = 'qwertyuiopasdfghjklzxcvbnm'

async function signUp(req, res) {
    const { name: { firstName, lastName }, username, email, password } = req.body;
    const encryptedPassword = await bcrypt.hash(password, 10);
    const user = new User({
        name: { firstName, lastName },
        userName,
        email,
        password: encryptedPassword
    });

    try {
        await user.save();
        res.json({ success: true });
    } catch (error) {
        res.json ({ success: false, message: error.message });
    }
}

async function login(req, res) {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
        res.json({ success: false, message: 'User not found' });
    }
    //check if password is equal to user password
    if (await bcrypt.compare(password, user.password)) {
        const token = jwt.sign({}, JWT_SECRET, { expiresIn: '1h' });
        
        return res.json({ success: true, token });
    } else {
        return res.status(401).json({ success: false, message: 'Invalid username or password' });
    }
}

module.exports = { signUp, login }