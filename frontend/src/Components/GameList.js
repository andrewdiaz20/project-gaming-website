import React, { useState, useEffect, useCallback } from 'react';
import Button from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useHref, useNavigate } from 'react-router-dom';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';

// const GameList = () => {
//     const [games, setGames] = useState([]);

//     const [isClicked, setIsClicked] = useState(false);

//     function handleClick() {
//       setIsClicked(!isClicked);
//     }

const GameList = () => {
  const [games, setGames] = useState([]);
  const [userId, setUserId] = React.useState(() => {
    return localStorage.getItem('userId');
  });

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

  useEffect(() => {
    fetchGames();
  }, []);


  const fetchGames = async () => {
    const url = `${process.env.REACT_APP_BACKEND_URL}/games/get10`;
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          userId: userId,
      })
    };
  
    console.log(url);
    console.log(options);
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
    console.log('yes');
    setGames(data);
  }


  const favoriteGames = (game) => {
    console.log('favorited', game);

    fetch(`${process.env.REACT_APP_BACKEND_URL}/games/favoriteGame`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Set to 'application/json'
        },
        body: JSON.stringify({
            name : game.name,
            externalGameId : game.id,
            userId: userId,
        }),
      })
        .then((resp) => {
          console.log(resp);
          if (!resp.ok) {
            //If the response status code is not OK, throw an error to catch it later
            throw new Error('Network response was not ok');
          }
  
          return resp.json(); //Parse JSON only if the response status code is OK
        })
        .then((data) => {
          console.log(data);
          if (data.error) {
            alert(data.error);
          } else {
            alert('Game added to favorite');
            fetchGames();
          }
        })
        .catch((err) => {
          console.error(err);
          alert('Login Failed. Please check your Username and Password.');
        });
  }

  return (
    <main>
      <div>
        <div>
          {/* <img className='background2' src='wp3146100.jpg' alt='witcher 3 background' /> */}
        </div>
        {/* <div>
                    <h1 className='GameListT'>GameList</h1>
                </div> */}
        {games.map((game, index) => (
          <Card className="cardgames" key={game.id} sx={{ maxWidth: 800 }}>
            {/* your goal on line 55, 
                                you want to figure out how to provide an argument (the id of the game) to handleCardClick 
                                things to note:
                                    you are not calling handleCardClick
                                    handleCardClick is a callback function, meaning is is called by the browser when this element is clicked.                         
                        */}
            <CardActionArea id="games">
              <IconButton sx={{ position: 'absolute', right: 0 }} onClick={() => { favoriteGames(game)}}>
                { game.favorited === true ? <FavoriteIcon/> : <FavoriteBorderIcon /> }
              </IconButton>
              <CardMedia
                component="img"
                height="140"
                image={game.image || 'game-console-6603120_1280.jpg'}
                alt={game.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {game.name}
                </Typography>
                <Typography
                  variant="body2"
                  fontSize="0.5rem"
                  color="text.secondary"
                >
                  {game.summary}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </div>
    </main>
  );
};

export default GameList;
