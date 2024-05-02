
import Navbar from "./Navigation";
import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useParams } from "react-router-dom";
import NewReview from "./NewReview";

const GameListPage = () => {
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
            <Card className="cardgames" sx={{ maxWidth: 800 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={games.cover || "/static/images/cards/default.jpg"} // Assuming 'cover' is the key for image URL
            alt={games.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {games.name}
            </Typography>
            <Typography variant="body2" fontSize="0.5rem" color="text.secondary">
              {games.summary}
            </Typography>
            <NewReview></NewReview>
          </CardContent>
        </CardActionArea>
      </Card>
    </main>
  )
}


export default GameListPage