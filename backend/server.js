const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config({path: '.env'});
const app = express()
const game = require('./routes/game')


//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/games', game)
// app.use('/reivews', review)
// app.use('/comments', comment)

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Connected to MongoD'))
    .catch(err => console.error(err));

//Server Start
const PORT = process.env.PORT 
app.listen(PORT, console.log(`listening on port ${PORT}`))