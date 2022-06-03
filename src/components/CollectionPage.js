import { useParams } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';

import CollectionInfo from "./CollectionInfo";
import useDataFetch from "./useDataFetch";
import VisualizationListView from "./VisualizationListView";

/**
 * Component for displaying a collection.
 */
export default function CollectionPage() {
  const {collectionId} = useParams();
  const [{data: collection, isLoading, isError}, doFetch] = useDataFetch(
    process.env.REACT_APP_DATA_SERVER_URL + '/api/collections/' + collectionId
  );

  return (
    <div>
      {isError && 'An error occurred during data fetching!'}
      {
        isLoading ? (
          <CircularProgress />
        ) : !isError && (
          <div>
            <CollectionInfo collection={collection} />
            <VisualizationListView
              isLoading={false}
              isError={false}
              visualizations={collection.visIds}
            />
          </div>
        )
      }
      
    </div>
  );
};