import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Login = ({ login }) => {
  const [formState, setFormState] = useState({
    email: '',
    password: '',
  });

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      loginUser(formState);
    },
    [formState]
  );

  const loginUser = ({ email, password }) => {
    console.log('backend url', process.env.REACT_APP_BACKEND_URL);
    
    fetch(`${process.env.REACT_APP_BACKEND_URL}/api/user/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Set to 'application/json'
      },
      body: JSON.stringify({ userName: email, password }),
    })
      .then((resp) => {
        console.log(resp);
        if (!resp.ok) {
          //If the response status code is not OK, throw an error to catch it later
          throw new Error('Network response was not ok');
        }

        return resp.json(); //Parse JSON only if the response status code is OK
      })
      .then((data) => {
        console.log(data);
        if (data.error) {
          alert(data.error);
        } else {
          alert('Login successful');
          // If the login was successful, set the token in local storage
          console.log('data', data);
          login({user: data});

          console.log('token from storage', localStorage.getItem('token'));
          navigate('/userpage');
        }
      })
      .catch((err) => {
        console.error(err);
        alert('Login Failed. Please check your Username and Password.');
      });
    // navigate('/userpage');
  };

  return (
<<<<<<< HEAD
    <div className="mainContainer">
      <div className="titleContainer">
=======
    <main>
        <div>
            <img className='logininpic' src='1015937.jpg' alt='Halo'></img>
        </div>
    <div className={'mainContainer'}>
      <div className={'titleContainer'}>
>>>>>>> c717a172a6f9ad952b9539ccb74d4ddd31a78461
        <h1 className="LoginTitle">Login</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <FormSection title="User Name">
          <InputField
            // type="email"
            value={formState.email}
            onChange={(ev) =>
              setFormState((prevFormState) => ({
                ...prevFormState,
                email: ev.target.value,
              }))
            }
            error={emailError}
            required={true}
          />
        </FormSection>
        <FormSection title="Password">
          <InputField
            type="password"
            value={formState.password}
            onChange={(ev) =>
              setFormState((prevFormState) => ({
                ...prevFormState,
                password: ev.target.value,
              }))
            }
            required={true}
            error={passwordError}
          />
        </FormSection>
        <div className="inputContainer">
          <input type="submit" value="Login" className="inputButton" />
        </div>
        <div className="inputContainer">
          <Link to="/signup">Create a new account</Link>
        </div>

      </form>
    </div>
<<<<<<< HEAD
=======
    <footer></footer>
    </main>
>>>>>>> c717a172a6f9ad952b9539ccb74d4ddd31a78461
  );
};

const FormSection = ({ title, children }) => {
  return (
    <div className="formSection">
      <h3>{title}</h3>
      {children}
    </div>
  );
};

const InputField = ({ type, value, onChange, error, required }) => {
  return (
    <div className="inputContainer">
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="inputBox"
        required={required}
      />
      {error && <label className="errorLabel">{error}</label>}
    </div>
  );
};

export default Login;

