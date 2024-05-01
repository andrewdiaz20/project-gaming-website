import React from "react"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


function NewReview() {
    const INITIAL_STATE = {
        rating: "",
        comment: "",
    }

    const navigate = useNavigate()

    const [newReview, setNewReview] = useState(INITIAL_STATE);
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        async function fetchData() {
            const url = `${process.env.REACT_APP_BACKEND_URL}/review/all`
            const response = await fetch(url)
            const data = await response.json()
            console.log(data)
            console.log('reviews retrevied')
            setReviews(data)
        }
        fetchData()
    }, [])

    const handleChange = (e) => {
        setNewReview({
            ...newReview,
            //this targets the name in our input, it does this because we are calling this function "handleChange" on linke 44 in our input. 
            //This targets our name in our inputs and [updates the correct values]
            [e.target.name]: e.target.value
        })
    }


    const handleSubmit = async (e) => {
        e.preventDefault()
    

        const url = `${process.env.REACT_APP_BACKEND_URL}/review/createreview`
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newReview)
        })
        if (response.status !== 201) console.log('ERROR:') // add error handling
        // navigate('/food/review') was replaced due to not refreshing the page when creating a new review. 
        // reloads our page on submit : answer: https://stackoverflow.com/questions/18920651/how-can-i-refresh-a-form-page-after-the-form-submits-to-blank




    }

    return (
        <div  style={{ margin: '10px', backgroundColor: '#f0f0f0', padding: '200px', borderRadius: '10px' }}>
            <h3>Leave us a Review</h3>
            <form onSubmit={handleSubmit} >
                <input className="form-2" onChange={handleChange} value={reviews.author} name="author" placeholder="author" />
                <input className="form-2" onChange={handleChange} value={reviews.content} name="content" placeholder="content" type="textArea" />
                <input className="form-1" onChange={handleChange} value={reviews.rating} name="rating" placeholder="rating" type="number" min={0} max={5} />
            

                <input className="form-1" Button="warning" type="submit" />

            </form>
            <div >
                {/* index was added cause for some reason it removed the id error on the console log  */}
                <h3 className="center-form">Reviews</h3>
                {reviews.map((review, index) => (
                    <div key={index} className="card-div" >
                        <Card className="custom-card" >
                            <CardContent> <h4 className="card-headers">Name:</h4> <p className="card-text-size">{review.author} </p></CardContent>
                            <Typography><h4 className="card-headers">Rating: </h4> <p className="card-text-size">{review.rating}</p></Typography>
                            <h4 className="card-headers">Comment:</h4 > <p className="card-text-size">{review.content}</p>
                        </Card>

                    </div>
                ))}
            </div>
        </div>
    )
}
    export default NewReview