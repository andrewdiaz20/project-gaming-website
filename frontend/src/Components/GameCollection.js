import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'name', headerName: 'Name', width: 130 },
  { field: 'description', headerName: 'Description', width: 200 },
  { field: 'games', headerName: 'Games', width: 200 },
];

const rows = [
  // {
  //   id: '1',
  //   name: 'Game 1',
  //   description: 'Game 1 Description',
  //   games: '4000',
  // },
  // {
  //   id: '2',
  //   name: 'Game 2',
  //   description: 'Game 2 Description',
  //   games: '5000',
  // },
  // {
  //   id: '3',
  //   name: 'Game 3',
  //   description: 'Game 3 Description',
  //   games: '3000',
  // },
];

const GameCollection = () => {
  return (
    <DataGrid
      rows={rows}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: { page: 0, pageSize: 5 },
        },
      }}
      sx={{ minHeight: '20vh'}}
      //pageSizeOptions={[5, 10]}
    />
  );
};

export default GameCollection;
