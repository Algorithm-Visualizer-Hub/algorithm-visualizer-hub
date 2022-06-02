import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import CreateIcon from '@mui/icons-material/Create';
import GitHubIcon from '@mui/icons-material/GitHub';

import UserContext from "./UserContext";

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

/**
 * Navbar component, incl. search bar, new-visualization button, user-page button, GitHub page link.
 */
export default function Navbar() {
  const [searchStr, setSearchStr] = useState('');

  const {user, saveUser} = useContext(UserContext);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="medium"
            edge="start"
            color="inherit"
            aria-label="redirect to home page"
            sx={{ mr: 2 }}
          >
            <Link to='/' style={{color: 'white', textDecoration: 'none'}}>
              AVH
            </Link>
          </IconButton>

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              value={searchStr}
              onChange={event => setSearchStr(event.target.value)}
            />
          </Search>

          <Box sx={{ flexGrow: 1 }} />

          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Link to="/visualizations/new">
              <IconButton
                size="large"
                aria-label="create a new visualization"
              >
                <CreateIcon style={{color: 'white'}} />
              </IconButton>
            </Link>

            <Link to={user === null ? '/login' : `/users/${user.id}`}>
              <IconButton
                size="large"
                aria-label="account of current user or login"
              >
                <AccountCircle style={{color: 'white'}} />
              </IconButton>
            </Link>
            
            <a href='https://github.com/Algorithm-Visualizer-Hub' target='_blank'>
              <IconButton
                size="large"
                aria-label="open Algorithm Visualizer Hub's GitHub page in a new tab"
                edge="end"
              >
                <GitHubIcon style={{color: 'white'}} />
              </IconButton>
            </a>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};