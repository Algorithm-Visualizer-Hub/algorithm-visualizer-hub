import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import UserContext from "./UserContext";

/**
 * Navbar component, incl. search bar, new-visualization button, user-page button.
 */
export default function Navbar() {
  const [searchStr, setSearchStr] = useState('');

  const {user, saveUser} = useContext(UserContext);

  return (
    <nav>
      <div>
        <Link to="/">AVH</Link>
        <input 
          value={searchStr} 
          placeholder="Search" 
          type="text" 
          onChange={(event) => setSearchStr(event.target.value)} 
        />
        <button>Search</button> 
        <button>New</button>
        {
          user === null
            ? <Link to="/login">Login</Link>
            : <Link to={`/users/${user.id}`}>Me</Link>
        }
      </div>
    </nav>
  );
};