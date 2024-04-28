import React from "react"
import { useState, useEffect } from 'react'
import App from "../App"
import Navbar from './Navigation'



function Home() {
    return (
        <main>
            <div class="HomeTitle">
                <h1>GameGlance</h1>
            </div>
            <div>
                <nav class="navbar">
                    <ul class="navbar">
                        <li><a>Search</a></li>
                        <li><a href='GameListPage'>My Games</a></li>
                        <li><a href='Login'>Login</a></li>
                        <li><a class="item2">Profile</a></li>
                    </ul>
                </nav>
            </div>
            <div>
            </div>
            <div></div>
            <footer>UnknownInfoInHere</footer>
        </main>
    )
}

export default Home;