import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const GameList = () => {
    const [games, setGames] = useState([]);

    const [isClicked, setIsClicked] = useState(false);
  
    function handleClick() {
      setIsClicked(!isClicked);
    }

    useEffect(() => {
        async function fetchData() {
            const url = `${process.env.REACT_APP_BACKEND_URL}/games/get10`
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
        fetchData()
    }, [])
    return (
        <main>
            <div>
                <div>
                    <img class='background2' src='wp3146100.jpg' alt='witcher 3 background' />
                </div>
                <div>
                    <h1 class='GameListT'>GameList</h1>
                </div>
                {games.map((game, index) => (

                    <Card class="card" sx={{ maxWidth: 345 }}>
                        <CardActionArea onClick={() => {}}>
                            <CardMedia
                                component="img"
                                height="140"
                                image={game.image || "/static/images/cards/default.jpg"}
                                alt={game.name}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {game.name}
                                </Typography>
                                <Typography variant="body2" fontSize="0.5rem" color="text.secondary">
                                    {game.summary}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>

                ))}
                <footer></footer>
            </div>
        </main>
    )
}

export default GameList
