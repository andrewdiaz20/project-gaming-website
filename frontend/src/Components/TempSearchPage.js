import React from "react"
import {useState, useEffect} from 'react'
import { Link } from "react-router-dom";

function TempSearch() {
    const [searchString, setSearchString] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    // useEffect(() => {
    //     async function fetchData() {
    //         const url = `${process.env.REACT_APP_BACKEND_URL}/games/get10`;
    //         const options = {
    //             method: 'POST',
    //             headers: {
    //               'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({
                   
    //             })
    //           };
    //         const response = await fetch(url, options)
    //         const data = await response.json()
    //         console.log(data)
    //         console.log('yes')
    //         setSearchString(data)
    //     }
    //     fetchData()
    // }, [])

    const handleChange = (e) => {
        setSearchString(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault()

        const url = `${process.env.REACT_APP_BACKEND_URL}/games/search/${searchString}`
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: searchString,
            })
        })

        const data = await response.json();
        console.log(data)
        setSearchResults(data)
    }


    return (
        <div>
            <div className="form">
                <form onSubmit={handleSubmit}>
                    <input onChange={handleChange} placeholder="Search Games" />
                    <input type="submit" />
                </form>
            </div>
            <div>
                {searchResults.map(food => ( // Render the search results
                    <div className="form2" key={food._id}>
                        <img  src={food.profilePicture} className="card-img" />
                        <Link to={`/foods/${food._id}`}>{food.name}</Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TempSearch