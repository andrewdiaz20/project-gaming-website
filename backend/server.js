const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config({path: '.env'});
const app = express()
const Game = require('./routes/game')
const axios = require('axios')




//middlewares
// app.use(cors({
//     origin: 'http://localhost:8080', // Allow requests from your React app domain
//     methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
//     credentials: true // Allow cookies to be sent across origins
// }));
app.use(express.json());
app.use(express.urlencoded({extended: true}));



app.use('/games', Game)
// app.use('/reivews', review)
// app.use('/comments', comment)

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Connected to MongoD'))
    .catch(err => console.error(err));

//Server Start
const PORT = process.env.PORT 
app.listen(PORT, console.log(`listening on port ${PORT}`))