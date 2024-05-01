<<<<<<< HEAD
import React, { useState } from "react";
import Navbar from "./Navigation";
=======
import React, { useState, useEffect } from 'react';
>>>>>>> c717a172a6f9ad952b9539ccb74d4ddd31a78461
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

<<<<<<< HEAD
function GameListPage() {
    const [isClicked, setIsClicked] = useState(false);
  
    function handleClick() {
      setIsClicked(!isClicked);
    }
  
    return (
      <div className={`card ${isClicked ? "clicked" : ""}`} onClick={handleClick}>
        <h2>Card Title</h2>
        <p>Card Content</p>
      </div>
    );
  }
=======
const GameListPage = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    async function fetchId() {
      const url = `${process.env.REACT_APP_BACKEND_URL}/games/get1`
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      }

      console.log(url)
      console.log(options)
      const response = await fetch(url, options)
      const data = await response.json()
      console.log(data)
      console.log('yes')
      setGames(data)
    }
    fetchId()
  }, [])
  return (
    <main>
      <div className='GameListPT'>
        <h1>Game Card</h1>
      </div>
      <Card className="cardgames" key={games.id} sx={{ maxWidth: 800 }}>
        <CardActionArea >
          <CardMedia
            component="img"
            height="140"
            image={games.image || "/static/images/cards/default.jpg"}
            alt={games.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {games.name}
            </Typography>
            <Typography variant="body2" fontSize="0.5rem" color="text.secondary">
              {games.summary}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <footer></footer>
    </main>
  )
}

>>>>>>> c717a172a6f9ad952b9539ccb74d4ddd31a78461

export default GameListPage