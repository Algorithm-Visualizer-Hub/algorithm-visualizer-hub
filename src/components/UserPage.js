import { Outlet, useParams, Link, useLocation } from "react-router-dom";
import { useState } from "react";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import UserInfo from "./UserInfo";
import useDataFetch from "./useDataFetch";

function LinkTab(props) {
  return (
    <Tab
      component={Link}
      {...props}
    />
  );
}

/**
 * Component for displaying user information, incl. user profile, visualizations, and collections.
 */
export default function UserPage() {
  const {userId} = useParams();
  const location = useLocation();
  const segments = location.pathname.split('/');
  let initialContentType = 0;
  if (segments.length >= 4 && segments[3] === 'collections') {
    initialContentType = 1;
  }
  const [contentType, setContentType] = useState(initialContentType);

  const [{data: user, isLoading, isError}, doFetch] = useDataFetch(process.env.REACT_APP_DATA_SERVER_URL + '/api/users/' + userId);

  const handleChange = (event, newValue) => {
    setContentType(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      {isError && 'An error occurred during data fetching!'}
      {
        isLoading ? (
          <CircularProgress />
        ) : !isError && (
          <UserInfo user={user} />
        )
      }
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={contentType} onChange={handleChange}>
          <LinkTab label="Visualizations" to='visualizations' />
          <LinkTab label="Collections" to='collections' />
        </Tabs>
      </Box>
      <Outlet />
    </Box>
  );
};