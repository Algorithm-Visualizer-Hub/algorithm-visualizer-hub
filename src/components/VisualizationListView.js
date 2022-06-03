import CircularProgress from '@mui/material/CircularProgress';

import VisualizationItemView from "./VisualizationItemView";

export default function VisualizationListView(props) {
  return (
    <div>
      {props.isError && 'An error occurred during data fetching!'}
      {
        props.isLoading ? (
          <CircularProgress />
        ) : !props.isError && (
          <ul>
            {props.visualizations.map(visualization => <VisualizationItemView key={visualization._id} visualization={visualization} />)}
          </ul>
        )
      }
    </div>
  );
};