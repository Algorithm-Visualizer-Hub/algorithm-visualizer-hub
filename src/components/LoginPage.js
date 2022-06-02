import { useState, useContext } from "react";
import axios from "axios";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import UserContext from "./UserContext";
import { Navigate } from "react-router-dom";

/**
 * Component for user login.
 */
export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {user, saveUser} = useContext(UserContext);

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      const response = await axios.post(
        process.env.REACT_APP_DATA_SERVER_URL + '/api/auth',
        {email: email, password: password}
      );
      saveUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (user !== null) {
    return <Navigate to="/" />;
  }

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      onSubmit={handleSubmit}
    >
      <Box>
        <TextField
          label='Email'
          value={email}
          onChange={event => setEmail(event.target.value)}
        />
      </Box>
      <Box>
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={event => setPassword(event.target.value)}
        />
      </Box>
      <Box>
        <Button variant='contained' type="submit">
          Login
        </Button>
      </Box>
    </Box>
    // <form onSubmit={handleSubmit}>
    //   <label>
    //     Email:
    //     <input
    //       type="email"
    //       value={email}
    //       onChange={event => setEmail(event.target.value)}
    //     />
    //   </label>
    //   <label>
    //     Password:
    //     <input
    //       type="password"
    //       value={password}
    //       onChange={event => setPassword(event.target.value)}
    //     />
    //   </label>
    //   <input type="submit" value="Login" />
    // </form>
  );
};

