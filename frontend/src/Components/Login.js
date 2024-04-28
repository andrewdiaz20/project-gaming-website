import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navigation';


function Login({ login }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    loginUser({ email, password });
  };

  const loginUser = ({ email, password }) => {
    navigate('/userpage');
    // console.log(JSON.stringify({ email, password }));
    //fetch('${process.env.REACT_APP_BACKEND_URL}/api/user/login', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json' // Set to 'application/json'
    //     },
    //     body: JSON.stringify({ email, password }),
    // })
    //     .then((resp) => {
    //         console.log(resp);
    //         if (!resp.ok) {
    //             //If the response status code is not OK, throw an error to catch it later
    //             throw new Error('Network response was not ok');
    //         }
    //         return resp.json(); //Parse JSON only if the response status code is OK
    //     })
    //     .then((data) => {
    //         console.log(data);
    //         if (data.error) {
    //             alert(data.error);
    //         } else {
    //             alert('Login successful');
    //If the login was successful, set the token in local storage
    //             login();
    //             console.log('token from storage', localStorage.getItem('token'));
    //             navigate('/userpage');
    //         }
    //     })
    //     .catch((err) => {
    //         console.error(err);
    //         alert('An error occurred:');
    //     });
  };
  return (
    <div className={'mainContainer'}>
      <div className={'titleContainer'}>
        <h1 className="LoginTitle">Login</h1>
      </div>
      <br />
      <form onSubmit={handleSubmit}>
        <div className={'inputContainer'}>
          <input
            value={email}
            placeholder="Enter your email here"
            onChange={(ev) => setEmail(ev.target.value)}
            className="inputBox"
          />
          <label className="errorLabel">{emailError}</label>
        </div>
        <br />
        <div className={'inputContainer'}>
          <input
            value={password}
            placeholder="Enter your password here"
            onChange={(ev) => setPassword(ev.target.value)}
            className="inputBox"
          />
          <label className="errorLabel">{passwordError}</label>
        </div>
        <div className={'inputContainer'}>
          <input type="submit" value="Login" className="inputButton" />
        </div>
    

        <div className="loginlinks">
          <button onClick={() => login()}>Login with Google</button>
          <br />
          <button onClick={() => login()}>Login with Facebook</button>
          <br />
          <button onClick={() => login()}>Login with GitHub</button>
          <br />
          <button onClick={() => login()}>Login with Twitter</button>
          <br />
          <button onClick={() => login()}>Login with LinkedIn</button>
        </div>
        <div>
          <a className="create-a-new-account"
            href="#"
            onClick={(e) => navigate('/signup')}>
            Create a new account
          </a>
        </div>
      </form>
      <footer></footer>
    </div>
  );
}

export default Login;