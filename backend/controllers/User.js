const bcrypt = require('bcrypt')
const User = require('../models/User')
const app = require('../express')
const jwt = require('jsonwebtoken')

const JWT_SECRET = 'secret'

async function signUp(req, res) {
    const { name: { firstName, lastName }, username, email, password } = req.body;
    const encryptedPassword = await bcrypt.hash(password, 10);
    const user = new User({
        name: { firstName, lastName },
        username,
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
    // check if password is correct
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
        res.json({ success: false, message: 'Incorrect password' });
    } else {
        const payload = { username };
        const token = jwt.sign(payload, 'secret', { expiresIn: '1h' });
        res.json({ success: true, token });
    }

    return res;
}

module.exports = { signUp, login }