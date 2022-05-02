

/**
 * Component for displaying user info.
 */
export default function UserInfo(props) {

  return (
    <div style={{border: "solid 1px"}}>
      <div>{props.user.username}</div>
      <div>{props.user.email}</div>
      <div>Stars earned: {props.user.starEarned}</div>
    </div>
  );
};