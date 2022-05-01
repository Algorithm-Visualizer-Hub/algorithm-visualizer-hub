import { Link } from "react-router-dom";
/**
 * Component for displaying information of a collection.
 */
export default function CollectionItem(props) {

  return (
    <li>
      <Link to={'/collections/'+props.collection._id}>{props.collection.name}</Link>
    </li>
  );
};