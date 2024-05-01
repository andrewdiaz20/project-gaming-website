import { useEffect, Fragment } from 'react';
import Rating from '@mui/material/Rating';

const data = [
    // {
    //     id: 1,
    //     author: 'author1',
    //     game: 'game1',
    //     date: 'date1',
    //     rating: 1
    // },
    // {
    //     id: 2,
    //     author: 'author2',
    //     game: 'game2',
    //     date: 'date2',
    //     rating: 2
    // },
    // {
    //     id: 3,
    //     author: 'author3',
    //     game: 'game3',
    //     date: 'date3',
    //     rating: 3
    // }
]

const ReviewUserPage = () => {

    useEffect(() => {

        let userId = localStorage.getItem('userId');

        // fetch(`${process.env.REACT_APP_BACKEND_URL}/api/review/getReviewsByUser?userId=${userId}`, {
        //   method: 'GET',
        //   headers: {
        //     'Content-Type': 'application/json', // Set to 'application/json'
        //   },
        // }).then((resp) => {
        //     console.log('reviews', resp)
        // })
        // .catch((err) => {
        //     console.error(err.message);
        // })

    }, []);

    // const loginUser = ({ email, password }) => {
    //     console.log(JSON.stringify({ email, password }));
    //     console.log('backend url', process.env.REACT_APP_BACKEND_URL);
    //     fetch(`${process.env.REACT_APP_BACKEND_URL}/api/review/getReviewsByUser`, {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json', // Set to 'application/json'
    //       },
    //       body: JSON.stringify({ userId: email, password }),
    //     })
    //       .then((resp) => {
    //         console.log(resp);
    //         if (!resp.ok) {
    //           //If the response status code is not OK, throw an error to catch it later
    //           throw new Error('Network response was not ok');
    //         }
    //         return resp.json(); //Parse JSON only if the response status code is OK
    //       })
    //       .then((data) => {
    //         console.log(data);
    //         if (data.error) {
    //           alert(data.error);
    //         } else {
    //           alert('Login successful');
    //           // If the login was successful, set the token in local storage
    //           //login();
    //           //console.log('token from storage', localStorage.getItem('token'));
    //           navigate('/userpage');
    //         }
    //       })
    //       .catch((err) => {
    //         console.error(err);
    //         alert('An error occurred:' + err.message);
    //       });
    //     // navigate('/userpage');
    //   };

    return (
        <Fragment>{
            !data || data.length === 0 
                ?<div>No Data</div>
                :data.map((reviewuserpage) => (
                    <div>{reviewuserpage.author}
                    <Rating name="read-only" value={1} readOnly />
                    </div>
                ))
            }
        </Fragment>
    )
}

export default ReviewUserPage;

