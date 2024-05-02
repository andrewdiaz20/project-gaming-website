
import Navbar from "./Navigation";
import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useParams } from "react-router-dom";
import NewReview from "./NewReview";

const GameListPage = ({userId}) => {
  const [games, setGames] = useState([]);
  const {name} = useParams();

  useEffect(() => {
    fetchGames(name);
  }, [name]);


  const fetchGames = async (gameName) => {
    const url = `${process.env.REACT_APP_BACKEND_URL}/games/search/${name}`;
    const response = await fetch(url, {
      method: 'POST', // Use POST method
      headers: {
        'Content-Type': 'application/json', // Specify JSON content type
      },
      body: JSON.stringify({ name: gameName }) // Send game name in the request body
    });
    const data = await response.json();
    if (data.length > 0) {
      setGames(data[0]); // Assuming the API returns an array of games, and you take the first one
    } else {
      // Handle no data returned
      console.log("No games found");
    }
  }
  
  
  return (
    <main>
      <div className='gameBannerImageContainer'>
        <img
          className=''
          src={(games.cover && games.cover.url) || '/game-console-6603120_1280.jpg'}
          alt={games.name}
        />
      </div>

      <Typography variant='h3' sx={{ pt: '20px', pb: '20px' }}>
        {games.name}
      </Typography>

      <Typography variant='desription'>
        {games.summary || 'No description available.'}
      </Typography>

      <NewReview game={games} userId={userId}></NewReview>
    </main>
  )
}


export default GameListPage