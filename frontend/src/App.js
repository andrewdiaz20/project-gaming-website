import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import './App.css';
import RandomGame from './Components/RandomGame';
import Home from './Components/Home';
import Login from './Components/Login'
import SearchGame from './Components/SearchGame';


function App(){
  

  return (
    <div>
      <Router>
          <Routes>
              <Route path = '/' element={<Home />}/>
              <Route path = '/SearchGame' element={<SearchGame />}/>
              {/* <Route path = 'GameListPage' element={<GameListPage />}/> */}
              <Route path = 'Login' element={<Login/>}/>
          </Routes>
      </Router>
    </div>
  )
  
}


export default App;
