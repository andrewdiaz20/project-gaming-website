import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import './App.css';
import RandomGame from './Components/RandomGame';

function App(){

  return (
    <div>
      <Router>
          <Routes>
              <Route path='/' element={<RandomGame />}/>
          </Routes>
      </Router>
    </div>
  )
  
}


export default App;
