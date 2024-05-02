import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {
  CardActionArea,
  Paper,
  TextField,
  Button,
  Rating,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Box,
} from '@mui/material';

function NewReview({ game, userId }) {
  const INITIAL_STATE = {
    rating: 0,
    comment: '',
  };

  const navigate = useNavigate();

  const [newReview, setNewReview] = useState(INITIAL_STATE);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const url = `${process.env.REACT_APP_BACKEND_URL}/api/userreview/getReviewsByGameExId?gameId=${game.id}`;
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json', // Set to 'application/json'
        },
      });
      const data = await response.json();
      console.log('review data', data);
      setReviews(data);
    }
    fetchData();
  }, [game]);

  const handleChange = (e) => {
    setNewReview({
      ...newReview,
      //this targets the name in our input, it does this because we are calling this function "handleChange" on linke 44 in our input.
      //This targets our name in our inputs and [updates the correct values]
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = `${process.env.REACT_APP_BACKEND_URL}/review/createreview`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        ...newReview,
        externalGameId: game.id,
        VideoGames_name: game.name,
        VideoGames_description: game.summary,
        userId: userId,
      }),
    });
    if (response.status !== 201) {
      console.log('ERROR:');
    } else {
      alert('Review successfully submitted.');
      setNewReview(INITIAL_STATE);
    } // add error handling
    // navigate('/food/review') was replaced due to not refreshing the page when creating a new review.
    // reloads our page on submit : answer: https://stackoverflow.com/questions/18920651/how-can-i-refresh-a-form-page-after-the-form-submits-to-blank
  };

  return (
    <div>
      {/* <div>
            <img src="/halo-reach-3p.jpg" alt="helldivers 2"/>
            </div> */}

      <Paper
        elevation={3}
        sx={{ mt: '20px', mb: '20px', p: '20px', width: '400px' }}
      >
        <Typography variant="h5" sx={{ pb: '20px' }}>
          Leave us a Review
        </Typography>

        <form onSubmit={handleSubmit}>
          <Typography component="legend">Rating</Typography>
          <Rating
            name="rating"
            value={reviews.rating}
            onChange={handleChange}
          />

          <TextField
            label="Write your Review"
            fullWidth
            margin="dense"
            size="small"
            value={reviews.content}
            onChange={handleChange}
            multiline
            minRows={4}
            name="content"
          />

          <Button type="submit" variant="contained" sx={{ mt: '10px' }}>
            Save
          </Button>
        </form>
      </Paper>

      <Box>
        <List
          sx={{ width: '100%', maxWidth: 450, bgcolor: 'background.paper' }}
        >
          {reviews.map((review, index) => {
            let name = review.user.name;
            let authorname = name ? (name.firstName + ' ' + name.lastName) : 'unknown user';

            return (
              <>
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar
                      alt={authorname}
                      src="/static/images/avatar/1.jpg"
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary={authorname}
                    secondary={
                      <React.Fragment>
                        <Rating
                          name="rating"
                          value={review.rating}
                          onChange={handleChange}
                        />
                        <Typography>{'Comment: ' + review.content}</Typography>
                      </React.Fragment>
                    }
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
              </>
            );
          })}
        </List>
      </Box>
    </div>
  );
}
export default NewReview;
