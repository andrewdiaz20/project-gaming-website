import React ,{useState}from 'react'
import { FaSearch } from "react-icons/fa";
<<<<<<< HEAD
import "./SearchBar.css"
=======
// import "./SearchBar.css"
>>>>>>> c717a172a6f9ad952b9539ccb74d4ddd31a78461

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