import React ,{useState, handeleChange}from 'react'
import { FaSearch } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

// import "./SearchBar.css"


function SearchBar() {

//     const[input,  setInput] = useState([]);
//     const [gameDetails, setGameDetails] = useState(null);
//     const [error, setError] = useState("");

//     const fetchData = async (searchTerm) => {
//       const url = `${process.env.REACT_APP_BACKEND_URL}/games/search`
//       const options = {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           gameName: searchTerm                                                   
//         })
//     }
    
//     try {
//         const response = await fetch(url, options);
//         if(!response.ok){
//           throw new Error('Failed to fetch game details');
//         }
//         const data = await response.json();
//         setGameDetails(data);
//         setError("");
//     } catch (error) {
//       console.error('Failed to fetch data:', error);
//       setError("Failed to load game details. Please try again.");
//       setGameDetails(null); // Clear any previous results
//     }
// }

// const handleChange = (value) => {
//   setInput(value);
//   if (value.length > 0) {  // Optionally, you can add a condition to control when the search is triggered
//       fetchData(value);
//   } else {
//     setGameDetails(null); // Clear results when input is cleared
//     setError(""); // Clear errors
//  }
// }
const [searchString, setSearchString] = useState('');
const [searchResults, setSearchResults] = useState([]);

const navigate = useNavigate(); 

const handleChange = (e) => {
  setSearchString(e.target.value);
};

const handleSubmit = async (e) => {
  e.preventDefault()

  const url = `${process.env.REACT_APP_BACKEND_URL}/games/search/${searchString}`
  const response = await fetch(url, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          name: searchString,
      })
  })

  const data = await response.json();
  console.log(data)
  setSearchResults(data)
  navigate('/GameList', { state: { games: data } });
  
}
return (
  <div className='input-wrapper'>
                <div className="form">
                <form onSubmit={handleSubmit} style={{display: 'flex'}}>
                    <input className='searchinput' onChange={handleChange} placeholder="Search Games" />
                    {/* <input type="submit" /> */}

                    <IconButton type='submit' sx={{padding: '3px'}} >
                        <SearchIcon  sx={{height: '20px'}}/>
                    </IconButton>

                </form>
            </div>
      {/* <FaSearch id="searchIcon" />
      <input type="text" placeholder="Type to search" 
             value={searchResults} 
             onChange={(e) => handleChange(e.target.value)} /> */}
      {/* {gameDetails && (
          <div className="game-details">
              <h3>{gameDetails.name}</h3>
              <p>{gameDetails.summary}</p>
              <p>Release Date: {new Date(gameDetails.release_dates?.date).toLocaleDateString()}</p>
              <p>Platform: {gameDetails.platforms?.map(platform => platform.name).join(', ')}</p>
          </div>
      )} */}
      {/* {error && <p className="error">{error}</p>} */}
  </div>

)
}

export default SearchBar