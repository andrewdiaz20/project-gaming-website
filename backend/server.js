const express = require('express')
const cors = require('cors')
const bcrypt = require('bcrypt')
const mongoose = require('mongoose')
require('dotenv').config({ path: '.env' });
const user = require('./routes/user')
const app = express()
const game = require('./routes/game')
const review = require('./routes/Review')


//middlewares
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.use(cors({
    origin: "*",
  }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.use('/api/user', user);
app.use('/games', game)
app.use('/api/review', review)
// app.use('/comments', comment)

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Connected to MongoD'))
    .catch(err => console.error(err));

//Server Start
const PORT = process.env.PORT 
app.listen(PORT, console.log(`listening on port ${PORT}`))