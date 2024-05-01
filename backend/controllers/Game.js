const VideoGames = require('../models/Game')
const { default: axios } = require('axios')

const CLIENT_ID = process.env.REACT_APP_IGDB_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_IGDB_CLIENT_SECRET;
const ACCESS_TOKEN = process.env.REACT_APP_IGDB_ACCESS_TOKEN;



    async function get10Games(req, res){
        try {
            //retrive data from the api via a POST request
            const VideoGames = await axios({
                url: 'https://api.igdb.com/v4/games',
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Client-ID': CLIENT_ID,
                    'Authorization': `Bearer ${ACCESS_TOKEN}`
                },
                //data is the type of info we want from the database
                data: 'fields name, platforms.name, release_dates.date, summary, artworks.url; limit 30;'
            });
    
            //promises which map through the array created Videogames variable creating a new array 
            const artUrl = VideoGames.data.map(game => {
                //check if artwork exists and if not then return empty 
                if (game.artworks && game.artworks.length > 0) {
                    //array buffer is used to turn the data to Base64 
                   return game.artworks[0].url;
                }
                return null
            });
            const gamesWithImages = VideoGames.data.map((game, index) => ({
                ...game,
                image: artUrl[index] 
            }));
    
            res.json(gamesWithImages);
        } catch (error){
            console.log('error getting POST request', error);
            res.status(500).json({message: 'error getting POST request'});
        }
    }
        /*
        map data from videogames to create new requests

        if you return a promise in the map function, you will have an array of promises

        research Promise.all() to see how you can use this to respond to the front end once you have the images for all your games

        */

async function SearchResults(req,res){
    const gameName = req.body.gameName;
    try {
        const VideoGames= await axios({
            url: 'https://api.igdb.com/v4/games',
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Client-ID': CLIENT_ID,
                'Authorization': `Bearer ${ACCESS_TOKEN}`
            },
            data: `fields name, platforms.name, release_dates.date, summary; search ${gameName}; limit 30;`
        })
        res.json(VideoGames.data);
    } catch (error) {
        console.log('error getting all VideoGamess', error)
        res.status(500).json({message: `error geting poast requests`})
    }
}

async function get1Games(req, res){
    const gameName = req.body.gameName;
    try {
        const VideoGames= await axios({
            url: 'https://api.igdb.com/v4/games',
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Client-ID': CLIENT_ID,
                'Authorization': `Bearer ${ACCESS_TOKEN}`
            },
            data: `fields name, platforms.name, release_dates.date, summary; where id == ${gameName}; limit 1;`
        })
        /*
        map data from videogames to create new requests
  
        if you return a promise in the map function, you will have an array of promises
  
        research Promise.all() to see how you can use this to respond to the front end once you have the images for all your games.
        */
        res.json(VideoGames.data);
    } catch (error){
        console.log('error getting POST request', error)
        res.status(500).json({message: `error getting POST request`})
    }
  }

async function RandomGame(req,res){

    try {
        const VideoGames= await axios({
            url: 'https://api.igdb.com/v4/games',
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Client-ID': CLIENT_ID,
                'Authorization': `Bearer ${ACCESS_TOKEN}`
            },
            data: 'fields name, platforms.name, release_dates.date, summary; limit 1;'
        })
        res.json(VideoGames.data);
    } catch (error) {
        console.log('error getting all VideoGamess', error)
        res.status(500).json({message: `error geting poast requests`})
    }
}



module.exports = {
    get10Games,
    SearchResults,
    get1Games
   
}
    
