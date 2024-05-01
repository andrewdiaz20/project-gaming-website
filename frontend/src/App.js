import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import RandomGame from './Components/RandomGame';
import Home from './Components/Home';
import Login from './Components/Login'
// import GameListP from './Components/GameListPage'
import SignUp from './Components/Signup';
import UserPage from './Components/UserPage';
import Navbar from './Components/Navigation';
import GameList from './Components/GameList';
import SearchBar from './Components/SearchBar';
import TempSearch from './Components/TempSearchPage';


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
    <SearchBar/>
       <Routes>
          <Route path='/' element={<Home />} />
          <Route path='RandomGame' element={<RandomGame />} />
          <Route path='GameList' element={<GameList />} />
          <Route path='Login' element={<Login />} />
          <Route path='SignUp' element={<SignUp />} />
          <Route path='UserPage' element={<UserPage />} />
          <Route path='TempSearch' element={<TempSearch />} />
        </Routes>

      </Router>
    </div>
  )

}


export default App;
