import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({login}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        loginUser = ({ email, password }) 
    }


    const loginUser = async (user) => {
        const response = await fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        });
        const data = await response.json();
        if (data.status === 'ok') {
            setLoggedIn(true);
            navigate('/profile');
        } else {
            setError(data.error);
        }
    }
    return (
        <div>
            <h1 class="LoginTitle">Login</h1>
            <nav class="navbar">
                <ul class="navbar">
                    <li><a>Search</a></li>
                    <li><a href='GameListPage'>My Games</a></li>
                    <li><a href='/'>Home</a></li>
                    <li><a class="item2">Profile</a></li>
                </ul>
            </nav>
            <form class="SubmitButton" onSubmit={handleSubmit}>
                <label>
                    Email:
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                </label>
                <label>
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                </label>
                <button type="submit">Login</button>
            </form>
            {error && <p>{error}</p>}

            <div class="loginlinks">
                <button onClick={() => login()}>Login with Google</button>
                <button onClick={() => login()}>Login with Facebook</button>
                <button onClick={() => login()}>Login with GitHub</button>
                <button onClick={() => login()}>Login with Twitter</button>
                <button onClick={() => login()}>Login with LinkedIn</button>
            </div>

            <div>
                <a class="create-a-new-account" href='#' onClick={(e) => navigate('/signup')}>Create a new account</a>
            </div>
            <footer>This is for the bottom</footer>
        </div>
    )
}

export default Login;