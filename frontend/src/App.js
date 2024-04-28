import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import RandomGame from './Components/RandomGame';
import Home from './Components/Home';
import Login from './Components/Login'
import SignUp from './Components/Signup';
import UserPage from './Components/UserPage';
import Navbar from './Components/Navigation';

// import GameListPage from './Components/GameListPage'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');

  const logout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  }

  const login = () => {
    localStorage.setItem('isLoggedIn', 'true');
    setIsLoggedIn(true);
  };

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem('isLoggedIn') === 'true');
  }, []);

  return (
    <div className='mainpage'>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='RandomGame' element={<RandomGame />} />
          {/* <Route path = 'GameListPage' element={<GameListPage />}/> */}
          <Route path='Login' element={<Login />} />
          <Route path='SignUp' element={<SignUp />} />
          <Route path='UserPage' element={<UserPage />} />
        </Routes>
      </Router>
    </div>
  )

}


export default App;
