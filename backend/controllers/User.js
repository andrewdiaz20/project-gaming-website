const bcrypt = require('bcrypt');
const User = require('../models/User');
const app = require('express');
const jwt = require('jsonwebtoken');
const ObjectId = require('mongodb').ObjectId;

const JWT_SECRET = 'qwertyuiopasdfghjklzxcvbnm';

async function signUp(req, res) {
  const {
    name: { firstName, lastName },
    userName,
    email,
    password,
  } = req.body;

  const encryptedPassword = await bcrypt.hash(password, 10);
  //Check if user with the same email already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.json({ success: false, message: 'Email already exists' });
  }
  // Check if user already exists
  const existingUserName = await User.findOne({ userName });
  if (existingUserName) {
    return res.json({ success: false, message: 'User Name already exists' });
    
  }
    const user = new User({
      name: { firstName, lastName },
      userName,
      email,
      password: encryptedPassword,

    });

    try {
      await user.save();
      res.json({ success: true });
    } catch (error) {
      res.json({ success: false, message: error.message });
    }
}

async function login(req, res) {
  const { userName, password } = req.body;
  console.log(req.body);
  const user = await User.findOne({ userName });
  console.log(user);
  if (!user) {
    return res.status(401).json({ success: false, message: 'User not found' });
  }
  //check if password is equal to user password
  if (await bcrypt.compare(password, user.password)) {
    const token = jwt.sign({}, JWT_SECRET, { expiresIn: '1h' });

    return res.json({ success: true, token, id: user._id });
  } else {
    return res
      .status(401)
      .json({ success: false, message: 'Invalid username or password' });
  }
}

async function getUserById(req, res) {
  const id = req.query.id;

  const user = await User.findOne({ "_id": new ObjectId(id) });
  console.log(user);
  if (!user) {
    return res.status(401).json({ success: false, message: 'User not found' });
  }
  //check if password is equal to user password
  return res.json({ success: true, user: {
    id: user._id,
    createdAt: user.createdAt,
    location: user.location,
    about: user.about
  } });
}



async function updateUser(req, res) {
  const { id, location, about } = req.body;

  try {
    await User.findOneAndUpdate({ "_id": new ObjectId(id) }, {location,
      about});

    res.json({ success: true });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
}

module.exports = { signUp, login, getUserById, updateUser };