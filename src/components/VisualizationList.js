import { useParams } from "react-router-dom";

import useDataFetch from "./useDataFetch";
import VisualizationItem from "./VisualizationItem";

/**
 * Component for displaying a list of visualizations created by a user.
 */
export default function VisualizationList() {
  const {userId} = useParams();
  const [
    {
      data: visualizations,
      isLoading,
      isError
    },
    doFetch
  ] = useDataFetch(
    process.env.REACT_APP_DATA_SERVER_URL + '/api/visualizations?authorId=' + userId
  );

  return (
    <div>
      {isError && 'An error occurred during data fetching!'}
      {
        isLoading ? (
          <div>Loading...</div>
        ) : !isError && (
          <ul>
            {visualizations.map(visualization => <VisualizationItem key={visualization._id} visualization={visualization} />)}
          </ul>
        )
      }
    </div>
  );
};