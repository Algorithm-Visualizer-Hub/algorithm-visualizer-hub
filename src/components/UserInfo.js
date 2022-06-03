import CircularProgress from '@mui/material/CircularProgress';

import useDataFetch from "./useDataFetch";

/**
 * Component for fetching and displaying user profile.
 */
export default function UserInfo(props) {
  const [{data: user, isLoading, isError}, doFetch] = useDataFetch(process.env.REACT_APP_DATA_SERVER_URL + '/api/users/' + props.userId);

  return (
    <>
      {isError && 'An error occurred when fetching user information!'}
      {
        isLoading ? (
          <CircularProgress />
        ) : !isError && (
          <div style={{border: "solid 1px"}}>
            <div>{user.username}</div>
            <div>{user.email}</div>
            <div>Stars earned: {user.starEarned}</div>
          </div>
        )
      }
    </>
  );
};