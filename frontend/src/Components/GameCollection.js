import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'name', headerName: 'Name', width: 200 },
  { field: 'description', headerName: 'Description', width: 300 },
];

const rows = [];

const GameCollection = ({ userId }) => {
  const [record, setRecord] = useState([]);

  useEffect(() => {
    console.log('userId', userId);
    fetch(
      `${process.env.REACT_APP_BACKEND_URL}/games/getFavoritedGameByUser?userId=${userId}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json', // Set to 'application/json'
        },
      }
    )
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        console.log('fav games', data);
        if (data) {
          let favGames = data.favGames;
          let newFavGames = [];

          if (favGames.length > 0) {
            newFavGames = favGames.map((fg) => {
              return {
                id: fg._id,
                name: fg.VideoGames_name,
                description: fg.VideoGames_description,
              };
            });
          }

          setRecord(newFavGames);
        }
      })
      .catch((err) => {
        console.error(err.message);
      });
  }, []);

  return (
    <DataGrid
      rows={record}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: { page: 0, pageSize: 10 },
        },
      }}
      sx={{ minHeight: '20vh' }}
      //pageSizeOptions={[5, 10]}
    />
  );
};

export default GameCollection;
