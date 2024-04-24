import React from "react"
import { useState, useEffect } from 'react'
import App from "../App"


function Home() {
    return (
        <main>
            <div class="HomeTitle">
                <h1>GameGlanceGiggles</h1>
            </div>
            <nav class="navbar">
                <ul class="navbar">
                    <li><a>Search</a></li>
                    <li><a>Home</a></li>
                    <li><a class="item2">Profile</a></li>
                </ul>
            </nav>
            <div>
                <img height="300" width="800" src="http://localhost:5000/images/chia-fruit-drink.jpg" alt="Chia Fruit Shake" />
            </div>
            <div></div>
            <footer>Must got at bottom</footer>
        </main>
    )
}

export default Home;