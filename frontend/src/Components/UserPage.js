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
  const [userId, setUserId] = React.useState(() => {
    return localStorage.getItem('userId');
  });

  useEffect(() => {
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
        <Box class="box" sx={{ width: '100%', typography: 'body1',  backgroundColor: 'rgba(255, 255, 255, 0.5)'}}>
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
              <ReviewUserPage userId={userId}/>
            </TabPanel>
            <TabPanel value="3">
              <GameCollection userId={userId}/>
            </TabPanel>
          </TabContext>
        </Box>
      </div>
    </main>
  );
};

export default UserPage;
