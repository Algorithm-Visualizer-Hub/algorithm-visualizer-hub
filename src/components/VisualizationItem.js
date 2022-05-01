import { Link } from "react-router-dom";

/**
 * Component for displaying information of a visualization.
 */
export default function VisualizationItem(props) {

  return (
    <li>
      <Link to={'/visualizations/'+props.visualization._id}>
        {props.visualization.name}
      </Link>
    </li>
  );
};