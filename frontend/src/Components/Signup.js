import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignUp(props) {
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    signup();
  };

  const signup = () => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/api/user/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Set to 'application/json'
      },
      body: JSON.stringify({
        name: {
          firstName: firstName,
          lastName: lastName,
        },
        userName,
        email,
        password,
      }),
    })
      .then((resp) => {
        if (!resp.ok) {
          //If the response status code is not OK, throw an error to catch it later
          throw new Error('Network response was not ok');
        }
        return resp.json(); //Parse JSON only if the response status code is OK
      })
      .then((data) => {
        if (data.error) {
          alert(data.error);
        } else {
          alert('Registration successful');
        }
      })
      .catch((err) => {
        console.error(err);
        alert('An error occurred during registration');
      });
  };

  return (
    <div className={'mainContainer'}>
      <div className={'titleContainer'}>
        <h2>Sign Up</h2>
      </div>
      <br />
      <form onSubmit={handleSubmit}>
        <div className={'inputContainer'}>
          <input
            type="text"
            placeholder="userName"
            value={userName}
            onChange={(ev) => setUserName(ev.target.value)}
            className="inputBox"
          />
        </div>
        <div className={'inputContainer'}>
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(ev) => setFirstName(ev.target.value)}
            className="inputBox"
          />
        </div>
        <br />
        <div className={'inputContainer'}>
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(ev) => setLastName(ev.target.value)}
            className="inputBox"
          />
        </div>
        <div className={'inputContainer'}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
            className="inputBox"
          />
        </div>
        <div className={'inputContainer'}>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
            className="inputBox"
          />
        </div>
        <div className={'inputContainer'}>
          <input type="submit" value="Create Account" className="inputButton" />
        </div>
        <div className="inputContainer">
          Already have an account?{' '}
          <a
            href="#"
            onClick={(e) => {
              navigate('/login');
            }}
          >
            Login
          </a>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
