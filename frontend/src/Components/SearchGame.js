import React from "react"
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import App from "../App"


const CLIENT_ID = process.env.REACT_APP_IGDB_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_IGDB_CLIENT_SECRET;
const ACCESS_TOKEN = process.env.REACT_APP_IGDB_ACCESS_TOKEN;

function SearchGame() {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('/v4/games', {
                method: 'POST',
                headers: {
                    'Client-ID': CLIENT_ID,
                    'Authorization': `Bearer ${ACCESS_TOKEN}`,
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    // Example request body, adjust fields and values according to your needs
                    "fields": 'name, id;',
                })
            });
            console.log(response)
            const data = await response.json()
            console.log(data)
            console.log('yes')
            setSearchResults(data)
        }
        fetchData();
    }, []);

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault()

        const url = `/api/v4/games`;
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Client-ID': CLIENT_ID,
                'Authorization': `Bearer ${ACCESS_TOKEN}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            
            },
            body: JSON.stringify({
                search: searchTerm,
               fields : "name"
            })
        })
        if (!response.ok) {
            console.error('Api request failed 222', response.status, response.statusText)
        } else {
            const data = await response.json();
            console.log(data);
            setSearchResults(data);
        }

        function DisplayResults(){
            {searchResults.length > 0 ? (
                searchResults.map(game => (
                    <div key={game.id}>{game.name}</div>
                ))
            ) : (
                <div>No results found</div>
            )}
        }
    }
    return (
        <div>
            <div>
                <h1>SearchForGame</h1>
                <h2>Input name of game for results</h2>
            </div>
            <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    value={searchTerm}
                    onChange={handleChange}
                    placeholder="Enter game"
                />
                <button type="submit">Search</button>
            </form>
            </div>
            <div>
            
                {searchResults.length > 0 ? (
                    searchResults.map(game => (
                        <div key={game.id}>{game.name}</div>
                    ))
                ) : (
                    <div>No results found</div>
                )}
            </div>


        </div>
    )
}

export default SearchGame;