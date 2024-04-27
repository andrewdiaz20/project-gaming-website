import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ login }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        Login({ email, password })
    }

    return (
        <div>
            <h1 class="LoginTitle">Login</h1>
            <nav class="navbarlogin">
                <ul class="navbarlogin">
                    <li><a>Search</a></li>
                    <li><a href='GameListPage'>My Games</a></li>
                    <li><a href='/'>Home</a></li>
                    <li><a class="item2">Profile</a></li>
                </ul>
            </nav>
            <form onSubmit={handleSubmit}>
                <label>
                <h1 class="SubmitButton" >Login:
                </h1>
                    <div className={'mainContainer'}>
                        <div className={'titleContainer'}>
                        </div>
                        <br />
                        <form onSubmit={handleSubmit}>
                            <div className={'inputContainer'}>
                                <input
                                    value={email}
                                    placeholder='Enter your email here'
                                    onChange={(ev) => setEmail(ev.target.value)}
                                    className='inputBox' />
                                <label className='errorLabel'>{emailError}</label>
                            </div>
                            <br />
                            <div className={'inputContainer'}>
                                <input
                                    value={password}
                                    placeholder='Enter your password here'
                                    onChange={(ev) => setPassword(ev.target.value)}
                                    className='inputBox' />
                                <label className='errorLabel'>{passwordError}</label>
                            </div>
                            <div className={'inputContainer'}>
                                <input
                                    type='submit'
                                    value='Login'
                                    className='inputButton' />
                            </div>
                        </form>
                        </div>
                </label>
            </form>

            <div class="inputContainer">
                <a href='#' onClick={(e) => { navigate('/signup') }}>Create a new account</a>
            </div>

            <div class="loginlinks">
                <button class="loginbuttons"onClick={() => login()}>Login with Google</button>
                <br />
                <button class="loginbuttons"onClick={() => login()}>Login with Facebook</button>
                <br />
                <button class="loginbuttons"onClick={() => login()}>Login with GitHub</button>
                <br />
                <button class="loginbuttons"onClick={() => login()}>Login with Twitter</button>
                <br />
                <button class="loginbuttons"onClick={() => login()}>Login with LinkedIn</button>
            </div>

            <div>
                <a class="create-a-new-account" href='#' onClick={(e) => navigate('/signup')}>Create a new account</a>
            </div>
            <footer></footer>
        </div>


    )
};



export default Login