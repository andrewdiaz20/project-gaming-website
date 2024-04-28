import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const GameList = () => {
    const [games, setGames] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const url = `${process.env.REACT_APP_BACKEND_URL}/games/get10`
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            const response = await fetch(url, options)
            const data = await response.json()
            console.log(data)
            console.log('yes')
            setGames(data)
        }
        fetchData()
    }, [])
    return (
        <div>

            {games.map((game, index) => (

                <Card class="card" sx={{ maxWidth: 345 }}>
                    <CardActionArea>
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
        </div>
    )
}            
            
export default GameList
