import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [error, setError] = React.useState('');
    const [loggedIn, setLoggedIn] = React.useState(false);

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const user = { email, password };
        console.log(user);
    }
    return (
        <><div>
            <h1>Login</h1>
        </div><form onSubmit={handleSubmit}>
                <label>Email: </label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                <label>Password: </label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Login</button>
            </form><div>

            </div></>
    );
}

default Login;