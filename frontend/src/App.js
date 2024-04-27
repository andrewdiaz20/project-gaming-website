import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import './App.css';
import RandomGame from './Components/RandomGame';
import Home from './Components/Home';
import Login from './Components/Login'
import GameList from './Components/GameList'
import Navigation from './Navigation';

function App(){
  return (
    <div>
      <Router>
        <Navigation />
          <Routes>
              <Route path = '/' element={<Home />}/>
              <Route path = 'RandomGame' element={<RandomGame />}/>
              <Route path = 'GameList' element={<GameList />}/>
              <Route path = 'Login' element={<Login/>}/>
          </Routes>
      </Router>
    </div>
  )
  
}


export default App;
