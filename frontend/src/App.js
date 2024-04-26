import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import './App.css';
import RandomGame from './Components/RandomGame';
import Home from './Components/Home/Home';

function App(){

  return (
    <div>
      <Router>
        <Home/>
          <Routes>
              <Route path='/' element={<RandomGame />}/>
              
          </Routes>
         
      </Router>
    </div>
  )
  
}


export default App;
