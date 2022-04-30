import { useContext, useState } from "react";

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
        <a href="/">AVH</a>
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
            ? <a href="#">Login</a>
            : <a href="#">My Space</a>
        }
      </div>
    </nav>
  );
};