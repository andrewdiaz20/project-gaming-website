import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SearchBar from './SearchBar';

function Navbar({ isLoggedIn, logout }) {
  let navigate = useNavigate();

  return (
    <div>
      <nav className="Navbar">
        <ul className="Navbar">
          <li>
            <a> <SearchBar/></a>
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
              {/* <li>
                <a href="UserPage">Profile</a>
              </li> */}
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
