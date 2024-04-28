import React ,{useState}from 'react'
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css"

function SearchBar() {

    const[input,  setInput] = useState("");
    const fetchData =(value)=> {
        fetch("https://api.igdb.com/v4/games").then((response)=>response.json())
        .then((json)=>{
         console.log(json)
        })
    }
    const handeleChange = (value) =>{
        setInput(value);
        fetchData(value);
    }
  return (
    <div className='input-wrapper'>
        <FaSearch id= "searchIcon" /> 
        <input type="text" placeholder="Type to search" 
      value={input} 
      onChange={(e)=>handeleChange(e.target.value)}/>
    </div>
  )
}

export default SearchBar