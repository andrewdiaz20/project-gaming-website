import { useState, useEffect, Fragment } from 'react';
import Rating from '@mui/material/Rating';
import Divider from '@mui/material/Divider';
import { Box, Typography, Container } from '@mui/material';

const data = [];

const ReviewUserPage = ({ userId }) => {
  const [reviewRecords, setReviewRecords] = useState([]);

  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_BACKEND_URL}/api/userreview/getReviewsByUser?userId=${userId}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json', // Set to 'application/json'
        },
      }
    )
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        console.log('reviews', data);
        if (data) {
          setReviewRecords(data.reviews);
        }
      })
      .catch((err) => {
        console.error(err.message);
      });
  }, []);


  return (
    <Fragment>
      {!reviewRecords || reviewRecords.length === 0 ? (
        <div>No Data</div>
      ) : (
        reviewRecords.map((reviewuserpage) => (
          <>
            <Box sx={{ pt: '10px', pb: '10px'}}>
              <Typography variant='h6' gutterBottom>Game: {reviewuserpage.game?.VideoGames_name}</Typography>
              
              <Box sx={{display: 'block', width: '100%', mb: '7px'}} >
                <Typography component='span' gutterBottom>Rating:</Typography>
                <Rating
                  name="read-only"
                  value={reviewuserpage.rating}
                  readOnly
                />
              </Box>
              <Typography component='span'>Comment:</Typography>
              <Typography variant='description' sx={{ pl: '10px'}} component='span'>{reviewuserpage.content}</Typography>
            </Box>
            <Divider />
          </>
        ))
      )}
    </Fragment>
  );
};

export default ReviewUserPage;
