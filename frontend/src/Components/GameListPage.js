import React from "react";
import Navbar from "./Navigation";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function GameListPage() {
    const [isClicked, setIsClicked] = useState(false);
  
    function handleClick() {
      setIsClicked(!isClicked);
    }
  
    return (
      <div className={`card ${isClicked ? "clicked" : ""}`} onClick={handleClick}>
        <h2>Card Title</h2>
        <p>Card Content</p>
      </div>
    );
  }

export default GameListPage