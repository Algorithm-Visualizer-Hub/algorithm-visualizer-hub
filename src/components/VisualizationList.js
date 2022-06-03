import { useParams } from "react-router-dom";

import useDataFetch from "./useDataFetch";
import VisualizationListView from "./VisualizationListView";

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
    <VisualizationListView
      isLoading={isLoading}
      isError={isError}
      visualizations={visualizations}
    />
  );
};