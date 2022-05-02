import { Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";

import Navbar from "./Navbar";
import UserInfo from "./UserInfo";
import useDataFetch from "./useDataFetch";

/**
 * Component for displaying user information, incl. user profile, visualizations, and collections.
 */
export default function UserPage() {
  const {userId} = useParams();
  const [{data: user, isLoading, isError}, doFetch] = useDataFetch(process.env.REACT_APP_DATA_SERVER_URL + '/api/users/' + userId);

  return (
    <div>
      <Navbar />
      {isError && 'An error occurred during data fetching!'}
      {
        isLoading ? (
          <div>Loading...</div>
        ) : !isError && (
          <div>
            <UserInfo user={user} />
            <Outlet />
          </div>
        )
      }
    </div>
  );
};