
/**
 * Component for displaying information of a collection.
 */
export default function CollectionInfo(props) {

  return (
    <div style={{border: "solid 1px"}}>
      <div>{props.collection.name}</div>
      <div>{props.collection.description}</div>
      <div>Saved by: {props.collection.numSaved}</div>
    </div>
  );
};