import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Login from './Components/Login';
import GameListPage from './Components/GameListPage';
import SignUp from './Components/Signup';
import UserPage from './Components/UserPage';
import Navbar from './Components/Navigation';
import GameList from './Components/GameList';
import SearchBar from './Components/SearchBar';
import TempSearch from './Components/TempSearchPage';
import NewReview from './Components/NewReview';
import MainPage from './Components/MainPage';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem('isLoggedIn') === 'true'
  );
  const [userId, setUserId] = React.useState(() => {
    return localStorage.getItem('userId');
  });

  const logout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  const login = ({ user }) => {
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userId', user.id);
    setIsLoggedIn(true);
    setUserId(user.id);
  };

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem('isLoggedIn') === 'true');
  }, []);

  return (
    <div className="mainpage">
      <Router>
       <Routes>
        <Route element={<MainPage isLoggedIn={isLoggedIn} logout={logout}/>}>
            <Route path='/' element={<Home />} />
            <Route path='/GameList' element={<GameList />} />
            <Route path='/Login' element={<Login login={login}/>} />
            <Route path='/SignUp' element={<SignUp />} />
            <Route path='/UserPage' element={<UserPage />} />
            <Route path='/TempSearch' element={<TempSearch />} />
            <Route path='/TempReview' element={<NewReview />} />
            <Route path='/GameListPage/:name' element={<GameListPage userId={userId}/>} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
