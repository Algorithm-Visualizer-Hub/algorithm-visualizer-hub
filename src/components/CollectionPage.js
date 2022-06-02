import { useParams } from "react-router-dom";
import CollectionInfo from "./CollectionInfo";

import useDataFetch from "./useDataFetch";
import VisualizationItem from "./VisualizationItem";

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
          <div>Loading...</div>
        ) : !isError && (
          <div>
            <CollectionInfo collection={collection} />
            <ul>
              {collection.visIds.map(visualization => <VisualizationItem key={visualization._id} visualization={visualization} />)}
            </ul>
          </div>
        )
      }
      
    </div>
  );
};