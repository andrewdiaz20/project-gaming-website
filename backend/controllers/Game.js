const VideoGames = require('../models/Game')
const { default: axios } = require('axios')

const CLIENT_ID = process.env.REACT_APP_IGDB_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_IGDB_CLIENT_SECRET;
const ACCESS_TOKEN = process.env.REACT_APP_IGDB_ACCESS_TOKEN;


async function get10Games(req, res){
    try {
        const VideoGames= await axios({
            url: 'https://api.igdb.com/v4/games',
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Client-ID': CLIENT_ID,
                'Authorization': `Bearer ${ACCESS_TOKEN}`
            },
            data: 'fields name, platforms.name, release_dates.date, summary; limit 10;'
        })
        res.json(VideoGames.data);
    } catch (error){
        console.log('error getting all VideoGamess', error)
        res.status(500).json({message: `error fetching all games`})
    }
}



module.exports = {
    get10Games,

    
}