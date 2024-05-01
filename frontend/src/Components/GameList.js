<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
=======
import React, { useState, useEffect, useCallback } from 'react';
>>>>>>> c717a172a6f9ad952b9539ccb74d4ddd31a78461
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
<<<<<<< HEAD

const GameList = () => {
    const [games, setGames] = useState([]);

    const [isClicked, setIsClicked] = useState(false);
  
    function handleClick() {
      setIsClicked(!isClicked);
    }
=======
import { useHref, useNavigate } from 'react-router-dom';

const GameList = () => {


    const [games, setGames] = useState([]);

    // function toAnotherPage(id){
    //     useEffect(() => {
    //         async function fetchIds() {
    //           try {
    //             const ids = await backend.getAllId();
    //             return ids;
    //           } catch (error) {
    //             console.error("Error fetching ids:", error);
    //           }
    //         }
    //         fetchIds();
    //       }, []);
    // }
>>>>>>> c717a172a6f9ad952b9539ccb74d4ddd31a78461

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
<<<<<<< HEAD
                    <img class='background2' src='wp3146100.jpg' alt='witcher 3 background' />
                </div>
                <div>
                    <h1 class='GameListT'>GameList</h1>
                </div>
                {games.map((game, index) => (

                    <Card class="card" sx={{ maxWidth: 345 }}>
                        <CardActionArea onClick={() => {}}>
=======
                    <img className='background2' src='wp3146100.jpg' alt='witcher 3 background' />
                </div>
                <div>
                    <h1 className='GameListT'>GameList</h1>
                </div>
                {games.map((game, index) => (

                    <Card className="cardgames" key={game.id} sx={{ maxWidth: 800 }}>
                        {/* your goal on line 55, 
                                you want to figure out how to provide an argument (the id of the game) to handleCardClick 
                                things to note:
                                    you are not calling handleCardClick
                                    handleCardClick is a callback function, meaning is is called by the browser when this element is clicked.                         
                        */}
                        <CardActionArea id="games">
>>>>>>> c717a172a6f9ad952b9539ccb74d4ddd31a78461
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

<<<<<<< HEAD
export default GameList
=======
export default GameList
>>>>>>> c717a172a6f9ad952b9539ccb74d4ddd31a78461
