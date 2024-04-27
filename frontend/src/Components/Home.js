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
                    <li><a href='GameListPage'>My Games</a></li>
                    <li><a href='Login'>Login</a></li>
                </ul>
            </nav>
            <div>
                Gameinfoinhere
            </div>
            <div></div>
            <footer>UnknownInfoInHere</footer>
        </main>
    )
}

export default Home;