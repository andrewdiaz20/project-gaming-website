import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function GameList() {
    return (
        <main>
            <div class='GameListT'>
                <h1>Game List</h1>
            </div>
            <div className="row">
                {/* {data.map((item, index) => ( */}
                    <Card class="card" sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image="/static/images/cards/contemplative-reptile.jpg"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Halo 3
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Halo 3 is a 2007 first-person shooter video game developed by Bungie for the Xbox 360 console. The third installment in the Halo franchise following Halo: Combat Evolved (2001) and Halo 2 (2004), the game's story centers on the interstellar war between 26th-century humanity, a collection of alien races known as the Covenant, and the alien parasite known as the Flood. The player assumes the role of the Master Chief, a cybernetically enhanced supersoldier, as he battles the Covenant and the Flood. In cooperative play, other human players assume the role of allied alien soldiers. The game features vehicles, weapons, and gameplay elements familiar and new to the series, as well as the addition of saved gameplay films, file sharing, and the Forge map editor—a utility which allows the player to perform modifications to multiplayer levels.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
            </div>
            <footer></footer>
        </main>

    )
}