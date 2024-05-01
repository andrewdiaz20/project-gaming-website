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
        path: '/Login',
    },
    {
        title: 'Signup',
        path: '/Signup',
    },
    {
      title: 'User Page',
      path: '/userpage',
  },
];

const MainPage = ({ isLoggedIn, logout }) => {
  const location = useLocation();
  const { pathname } = location;

  let currentMenu = () => navmenu.find((e) => e.path === pathname);

  return (
    <div>
      <div className="header">
        <div className="titleContainer">
          <h1 className="headerTitle">{currentMenu()?.title}</h1>
        </div>
        <Navbar isLoggedIn={isLoggedIn} logout={logout} />
      </div>
      {/* <SearchBar/> */}
      {pathname === '/Login' && <img className="contentBackground" src="1015937.jpg" alt="Halo"></img>}
      {pathname === '/' && <img className='homescreenbackground'src="video-games-collage-wide-2048x1152.jpg" alt="multiple-game-picture"/>}
      {pathname === '/GameList' && <img className='background2' src='wp3146100.jpg' alt='witcher 3 background' />}

      <div className="content">
        <Outlet />
      </div>
      <footer></footer>
    </div>
  );
};

export default MainPage;
