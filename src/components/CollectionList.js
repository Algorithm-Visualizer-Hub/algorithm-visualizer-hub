import { useParams } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';

import CollectionItem from "./CollectionItem";
import useDataFetch from "./useDataFetch";

/**
 * Component for displaying a list of collections saved by a user.
 */
export default function CollectionList() {
  const {userId} = useParams();
  const [
    {
      data: {
        collectionIds: collections
      },
      isLoading,
      isError
    },
    doFetch
  ] = useDataFetch(
    process.env.REACT_APP_DATA_SERVER_URL + '/api/users/' + userId,
    {collectionIds: []}
  );
  
  return (
    <div>
      {isError && 'An error occurred during data fetching!'}
      {
        isLoading ? (
          <CircularProgress />
        ) : !isError && (
          <ul>
            {collections.map(collection => <CollectionItem key={collection._id} collection={collection} />)}
          </ul>
        )
      }
    </div>
  );
};