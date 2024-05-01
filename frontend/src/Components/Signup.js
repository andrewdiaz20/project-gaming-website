import { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';

const SignUpForm = () => {
  const [formState, setFormState] = useState({
    userName: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const [error, setError] = useState(null);

  const handleSubmit = useCallback((event) => {
    event.preventDefault();
    const signup = async () => {
      try {
        console.log('backend url', process.env.REACT_APP_BACKEND_URL);
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/user/signup`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: {
              firstName: formState.firstName,
              lastName: formState.lastName,
            },
            userName: formState.userName,
            email: formState.email,
            password: formState.password,
          }),
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();

        if (data.error) {
          setError(data.error);
        } else {
          alert('Registration successful');
        }
      } catch (error) {
        setError(error.message);
      }
    };

    signup();
  }, [formState]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState((prevFormState) => ({...prevFormState, [name]: value }));
  };

  return (
    <main>
    <div className='SignT'>
            <img src='istockphoto-1325074732-2048x2048.jpg'alt='game'></img>
        </div>
    <div className="mainContainer">
      <div className="SignupT">
        <h2>Sign Up</h2>
      </div>
      {error && (
        <div className="errorContainer">
          <p>{error}</p>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <UserInformationForm
          firstName={formState.firstName}
          lastName={formState.lastName}
          userName={formState.userName}
          onChange={handleInputChange}
        />
        <AccountInformationForm
          email={formState.email}
          password={formState.password}
          onChange={handleInputChange}
        />
        <div className="inputContainer">
          <input type="submit" value="Create Account" className="inputButton" />
        </div>
        <div className="inputContainer">
          Already have an account?{' '}
          <Link to="/login">Login</Link>
        </div>
      </form>
    </div>
    <footer></footer>
    </main>
  );
};

const UserInformationForm = ({ firstName, lastName, userName, onChange }) => {
  return (
    <div className="formSection">
      <h3>User Information</h3>
      <InputField
        type="text"
        name="firstName"
        placeholder="First Name"
        value={firstName}
        onChange={onChange}
      />
      <InputField
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={lastName}
        onChange={onChange}
      />
      <InputField
        type="text"
        name="userName"
        placeholder="User Name"
        value={userName}
        onChange={onChange}
      />
    </div>
  );
};

const AccountInformationForm = ({ email, password, onChange }) => {
  return (
    <div className="formSection">
      <h3>Account Information</h3>
      <InputField
        type="email"
        name="email"
        placeholder="Email"
        value={email}
        onChange={onChange}
      />
      <InputField
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        onChange={onChange}
      />
    </div>
  );
};
  const InputField = ({ type, name, placeholder, value, onChange }) => {
    return (
      <div className="inputContainer">
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="inputBox"
        />
      </div>
    );
  };

export default SignUpForm