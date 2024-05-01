import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

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

export default GameListPage;