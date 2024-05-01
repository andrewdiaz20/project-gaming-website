import React, { Fragment, useEffect, useState } from 'react';
import {
  TextField,
  Button,
  FormControl,
  Typography,
  Container,
  InputAdornment,
  FormHelperText,
} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Edit from '@mui/icons-material/Edit';

import { compareAsc, format } from 'date-fns';

const Profile = ({ user }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [location, setLocation] = useState('');
  const [about, setAbout] = useState('');

  useEffect(() => {
    setLocation(user.location);
    setAbout(user.about);
  }, [user]);

  const createdDate =
    user.createdAt && user.createdAt !== ''
      ? format(new Date(user.createdAt), 'MM-dd-yyyy')
      : '';

  const submitHandler = (e) => {
    e.preventDefault();

    fetch(`${process.env.REACT_APP_BACKEND_URL}/api/user/updateUser`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Set to 'application/json'
      },
      body: JSON.stringify({ id: user.id, about, location }),
    })
      .then((resp) => {
        console.log(resp);
        if (!resp.ok) {
          //If the response status code is not OK, throw an error to catch it later
          throw new Error('Network response was not ok');
        }

        return resp.json(); //Parse JSON only if the response status code is OK
      })
      .then((data) => {
        console.log(data);
        if (data.error) {
          alert(data.error);
        } else {
          alert('Profile Successfully Updated.');
        }
      })
      .catch((err) => {
        console.error(err);
        alert('Something went wrong.');
      });

    setIsEdit(false);
  };

  return (
    <Fragment>
      <form onSubmit={submitHandler} style={{ backgroundColor: 'white' }}>
        <TextField
          label="Member Since"
          fullWidth
          margin="dense"
          size="small"
          readOnly
          value={createdDate}
        />

        <TextField
          label="Location"
          fullWidth
          margin="dense"
          size="small"
          readOnly={!isEdit}
          value={location}
          onChange={(e) => {
            setLocation(e.target.value);
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={(e) => {
                    setIsEdit(true);
                  }}
                  // onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {!isEdit && <Edit />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <TextField
          label="About Me"
          fullWidth
          margin="dense"
          size="small"
          readOnly={!isEdit}
          value={about}
          onChange={(e) => {
            setAbout(e.target.value);
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={(e) => {
                    setIsEdit(true);
                  }}
                  // onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {!isEdit && <Edit />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        {isEdit && (
          <Button type="submit" variant="contained" sx={{ mt: '10px' }}>
            Save
          </Button>
        )}
      </form>
    </Fragment>
  );
};

export default Profile;
