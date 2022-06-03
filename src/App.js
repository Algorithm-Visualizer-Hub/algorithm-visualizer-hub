import { BrowserRouter, Route, Routes } from "react-router-dom";

import CollectionPage from "./components/CollectionPage";
import HomePage from "./components/HomePage";
import UserPage from "./components/UserPage";
import VisualizationPage from "./components/VisualizationPage";
import LoginPage from "./components/LoginPage";
import UserContext from "./components/UserContext";
import useLocalStorage from "./components/useLocalStorage";
import CollectionList from "./components/CollectionList";
import VisualizationList from "./components/VisualizationList";
import Navbar from "./components/Navbar";
import RegisterPage from "./components/RegisterPage";

export default function App() {
  const [user, saveUser] = useLocalStorage('user');

  return (
    <BrowserRouter>
      <UserContext.Provider value={{user: user, saveUser: saveUser}}>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />}/>

          <Route path="/users/:userId" element={<UserPage />}>
            <Route path="visualizations" element={<VisualizationList />} />
            <Route path="collections" element={<CollectionList />} />
          </Route>

          <Route path="/visualizations/:visualizationId" element={<VisualizationPage />} />
          
          <Route path="/collections/:collectionId" element={<CollectionPage />} />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
};
