import React from "react";

const UserContext = React.createContext({
  user: null,
  saveUser: user => {}
});

export default UserContext;