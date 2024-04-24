import React from "react"
import { useState, useEffect } from 'react'
import App from "../App"


function Home() {
    return (
        <main>
            <div class="HomeTitle">
                <h1>GGG</h1>
            </div>
            <nav class="navbar">
                <ul>
                    <li><a>Search</a></li>
                    <li><a>Home</a></li>
                    <li><a>Contact</a></li>
                    <li><a>Profile</a></li>
                </ul>
            </nav>
            <div>
                <img height="300" width="500" src="http://localhost:5000/images/chia-fruit-drink.jpg" alt="Chia Fruit Shake" />
            </div>
            <div></div>
        </main>
    )
}

export default Home;