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
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
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

            <div>
                <button onClick={() => login()}>Login with Google</button>
                <button onClick={() => login()}>Login with Facebook</button>
                <button onClick={() => login()}>Login with GitHub</button>
                <button onClick={() => login()}>Login with Twitter</button>
                <button onClick={() => login()}>Login with LinkedIn</button>
            </div>

            <div>
                <a href='#' onClick={(e) => navigate('/signup')}>Create a new account</a>
            </div>
        </div>
    )
}

export default Login;