import React ,{useState, handeleChange}from 'react'
import { FaSearch } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';



function SearchBar() {

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

  </div>

)
}

export default SearchBar