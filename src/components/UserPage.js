import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";
import UserInfo from "./UserInfo";

/**
 * Component for displaying user information, incl. user profile, visualizations, and collections.
 */
export default function UserPage() {
  return (
    <div>
      <Navbar />
      <UserInfo />
      <Outlet />
    </div>
  );
};