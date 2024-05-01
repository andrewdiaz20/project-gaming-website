import React, { useEffect } from 'react';
// import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Profile from './Profile';
import ReviewUserPage from './ReviewUserPage';
import GameCollection from './GameCollection';
const UserPage = () => {
  const [value, setValue] = React.useState('1');
  const [user, setUser] = React.useState({});
<<<<<<< HEAD

  useEffect(() => {
    let userId = localStorage.getItem('userId');
=======
  const [userId, setUserId] = React.useState(() => {
    return localStorage.getItem('userId');
  });

  useEffect(() => {
>>>>>>> c717a172a6f9ad952b9539ccb74d4ddd31a78461
    console.log('userId', userId);

    fetch(
      `${process.env.REACT_APP_BACKEND_URL}/api/user/getUserById?id=${userId}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json', // Set to 'application/json'
        },
      }
    )
      .then((resp) => {
        if (!resp.ok) {
          //If the response status code is not OK, throw an error to catch it later
          throw new Error('Network response was not ok');
        }

        return resp.json();
      })
      .then((data) => {
        console.log('user Data', data.user);

        setUser(data.user);
      })
      .catch((err) => {
        console.error(err.message);
      });
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <main>
      <div>
        <h1 class="userT">User Page</h1>
<<<<<<< HEAD
        <Box class="box" sx={{ width: '100%', typography: 'body1' }}>
=======
        <Box class="box" sx={{ width: '100%', typography: 'body1'}}>
>>>>>>> c717a172a6f9ad952b9539ccb74d4ddd31a78461
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab label="Profile" value="1" />
                <Tab label="Review" value="2" />
                <Tab label="Game Collection" value="3" />
              </TabList>
            </Box>
            <TabPanel value="1">
              <Profile user={user}/>
            </TabPanel>
            <TabPanel value="2">
<<<<<<< HEAD
              <ReviewUserPage />
=======
              <ReviewUserPage userId={userId}/>
>>>>>>> c717a172a6f9ad952b9539ccb74d4ddd31a78461
            </TabPanel>
            <TabPanel value="3">
              <GameCollection />
            </TabPanel>
          </TabContext>
        </Box>
      </div>
      <footer></footer>
    </main>
  );
};

export default UserPage;
