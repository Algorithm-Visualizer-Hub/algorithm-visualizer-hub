import { Outlet, useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

import UserInfo from "./UserInfo";
import useDataFetch from "./useDataFetch";

/**
 * Component for displaying user information, incl. user profile, visualizations, and collections.
 */
export default function UserPage() {
  const {userId} = useParams();
  const [{data: user, isLoading, isError}, doFetch] = useDataFetch(process.env.REACT_APP_DATA_SERVER_URL + '/api/users/' + userId);
  const [contentType, setContentType] = useState();

  const navigate = useNavigate();
  const handleChange = event => {
    setContentType(event.target.value);
    if (event.target.value === 'collections' || event.target.value === 'visualizations') {
      navigate(event.target.value);
    }
  };

  return (
    <div>
      {isError && 'An error occurred during data fetching!'}
      {
        isLoading ? (
          <div>Loading...</div>
        ) : !isError && (
          <div>
            <UserInfo user={user} />
            <select value={contentType} onChange={handleChange}>
              <option value="please">--Please choose a content type--</option>
              <option value="collections">collections</option>
              <option value="visualizations">visualizations</option>
            </select>
            <Outlet />
          </div>
        )
      }
    </div>
  );
};