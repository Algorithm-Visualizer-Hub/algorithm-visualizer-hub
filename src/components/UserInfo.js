import { useContext } from "react";

import UserContext from "./UserContext";

/**
 * Component for displaying user info.
 */
export default function UserInfo() {
  const {user, saveUser} = useContext(UserContext);

  return (
    <div style={{border: "solid 1px"}}>
      <div>{user.username}</div>
      <div>{user.email}</div>
      <div>Stars earned: {user.starEarned}</div>
    </div>
  );
};