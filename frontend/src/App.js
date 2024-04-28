import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import './App.css';
import RandomGame from './Components/RandomGame';
import Home from './Components/Home';
import Login from './Components/Login'
import GameListPage from './Components/GameListPage'


function App(){

  return (
    <div>
      <Router>
       
        <Home/>
          <Routes>
              <Route path = '/' element={<Home />}/>
              <Route path = 'RandomGame' element={<RandomGame />}/>
              {/* <Route path = 'GameListPage' element={<GameListPage />}/> */}
              <Route path = 'Login' element={<Login/>}/>
              <Route path = 'GameListPage' element={<GameListPage/>}/>
          </Routes>
         
      </Router>
    </div>
  )
  
}


export default App;
