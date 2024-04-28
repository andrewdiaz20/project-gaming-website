import React from "react"
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
    return (
        <div>
            <nav className="Navbar">
                <ul className="Navbar">
                    <li><a>Search</a></li>
                    <li><a href='/'>Home</a></li>
                    <li><a href='GameList'>My Games</a></li>
                    <li><a href='Login'>Login</a></li>
                    <li><a class="item2">Profile</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar