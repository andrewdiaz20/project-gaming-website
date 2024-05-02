import { Outlet } from 'react-router-dom';
import Navbar from './Navigation';
import SearchBar from './SearchBar';
import { useLocation } from 'react-router-dom';

const navmenu = [
  {
    title: 'GameGlance',
    path: '/',
  },
  {
    title: 'Game List',
    path: '/GameList',
  },
  {
    title: 'Login',
    path: '/login',
  },
  {
    title: 'Signup',
    path: '/signup',
  },
  {
    title: 'User Page',
    path: '/userpage',
  },
];

const MainPage = ({ isLoggedIn, logout }) => {
  const location = useLocation();
  const { pathname } = location;

  const compareStringCaseInsensitive = (str1, str2) => {
    return str1.toLowerCase() === str2.toLowerCase();
  }

  let currentMenu = () =>
    navmenu.find((e) => e.path.toLowerCase() === pathname.toLowerCase());

  return (
    <div>
      <div className="header">
        <div className="titleContainer">
          <h1 className="headerTitle">{currentMenu()?.title}</h1>
          <Navbar isLoggedIn={isLoggedIn} logout={logout} />
        </div>
        
      </div>
      {/* <SearchBar/> */}
      {(compareStringCaseInsensitive(pathname, '/login') || 
        compareStringCaseInsensitive(pathname, '/signup')) && (
        <img className="contentBackground" src="1015937.jpg" alt="Halo"></img>
      )}
      {(compareStringCaseInsensitive(pathname, '/userpage')) && (
        <img className="contentBackground" src="apps.4881.14611981552113165.1297136a-f273-41f1-947f-59044c848c55.jpg" alt="Halo"></img>
      )}
      {pathname === '/' && (
        <img
          className="homescreenbackground"
          src="video-games-collage-wide-2048x1152.jpg"
          alt="multiple-game-picture"
        />
      )}
      {compareStringCaseInsensitive(pathname, '/GameList') && (
        <img
          className="background2"
          src="wp3146100.jpg"
          alt="witcher 3 background"
        />
      )}

      <div className="content">
        <Outlet />
      </div>
      <footer></footer>
    </div>
  );
};

export default MainPage;
