// import React from 'react';
// // import Tabs from '@mui/material/Tabs';
// // import Tab from '@mui/material/Tab';
// // import Box from '@mui/material/Box';
// // import TabContext from '@mui/lab/TabContext';
// // import TabList from '@mui/lab/TabList';
// // import TabPanel from '@mui/lab/TabPanel';
// import Profile from './Profile';
// import ReviewUserPage from './ReviewUserPage';
// import GameCollection from './GameCollection';
// const UserPage = () => {
//   const [value, setValue] = React.useState('1');

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };
//   return (
//     <div>
//       <h1>User Page</h1>
//       <Box sx={{ width: '100%', typography: 'body1' }}>
//         <TabContext value={value}>
//           <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
//             <TabList onChange={handleChange} aria-label="lab API tabs example">
//               <Tab label="Profile" value="1" />
//               <Tab label="Review" value="2" />
//               <Tab label="Game Collection" value="3" />
//             </TabList>
//           </Box>
//           <TabPanel value="1">
//             <Profile />
//           </TabPanel>
//           <TabPanel value="2">
//             <ReviewUserPage />
//           </TabPanel>
//           <TabPanel value="3">
//             <GameCollection />
//           </TabPanel>
//         </TabContext>
//       </Box>
//     </div>
//   );
// };

// export default UserPage;
