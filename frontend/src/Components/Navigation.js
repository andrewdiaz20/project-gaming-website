import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
<<<<<<< HEAD
=======
import SearchBar from './SearchBar';
>>>>>>> c717a172a6f9ad952b9539ccb74d4ddd31a78461

function Navbar({ isLoggedIn, logout }) {
  let navigate = useNavigate();

  return (
    <div>
      <nav className="Navbar">
        <ul className="Navbar">
          <li>
<<<<<<< HEAD
            <a>Search</a>
=======
            <a> <SearchBar/></a>
>>>>>>> c717a172a6f9ad952b9539ccb74d4ddd31a78461
          </li>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="GameList">My Games</a>
          </li>
          {isLoggedIn ? (
            <>
              <li>
                <a
                  href="/"
                  onClick={(e) => {
                    e.preventDefault();
                    logout();
                    navigate('/login');
                  }}
                >
                  Logout
                </a>
              </li>
<<<<<<< HEAD
              {/* <li>
                <a href="UserPage">Profile</a>
              </li> */}
=======
              <li>
                <a href="UserPage">Profile</a>
              </li>
>>>>>>> c717a172a6f9ad952b9539ccb74d4ddd31a78461
            </>
          ) : (
            <li>
              <a href="Login">Login</a>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
