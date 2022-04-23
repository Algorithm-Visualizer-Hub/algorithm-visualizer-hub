import { useState } from "react";

/**
 * Navbar component, incl. search bar, new-visualization button, user-page button.
 */
export default function Navbar() {
  const [searchStr, setSearchStr] = useState('');

  return (
    <nav>
      <div>
        <a href="#">AVH</a>
        <input 
          value={searchStr} 
          placeholder="Search" 
          type="text" 
          onChange={(event) => setSearchStr(event.target.value)} 
        />
        <button>Search</button>
        <button>New</button>
        <a href="#">My Space</a>
      </div>
    </nav>
  );
};