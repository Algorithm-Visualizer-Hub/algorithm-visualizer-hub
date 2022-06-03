import { Outlet, useParams, Link, useLocation } from "react-router-dom";
import { useState } from "react";
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import UserInfo from "./UserInfo";


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

  const handleChange = (event, newValue) => {
    setContentType(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <UserInfo userId={userId} />
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={contentType} onChange={handleChange}>
          <Tab component={Link} label="Visualizations" to='visualizations' />
          <Tab component={Link} label="Collections" to='collections' />
        </Tabs>
      </Box>
      <Outlet />
    </Box>
  );
};