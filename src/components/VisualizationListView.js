import CircularProgress from '@mui/material/CircularProgress';

import VisualizationItem from "./VisualizationItem";

export default function VisualizationListView(props) {
  return (
    <div>
      {props.isError && 'An error occurred during data fetching!'}
      {
        props.isLoading ? (
          <CircularProgress />
        ) : !props.isError && (
          <ul>
            {props.visualizations.map(visualization => <VisualizationItem key={visualization._id} visualization={visualization} />)}
          </ul>
        )
      }
    </div>
  );
};