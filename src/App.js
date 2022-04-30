import { BrowserRouter, Route, Routes } from "react-router-dom";

import CollectionPage from "./components/CollectionPage";
import HomePage from "./components/HomePage";
import UserPage from "./components/UserPage";
import VisualizationPage from "./components/VisualizationPage";
import LoginPage from "./components/LoginPage";
import UserContext from "./components/UserContext";
import useLocalStorage from "./components/useLocalStorage";

function App() {
  const [user, saveUser] = useLocalStorage('user');

  return (
    <BrowserRouter>
      <UserContext.Provider value={{user: user, saveUser: saveUser}}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/user/:userId" element={<UserPage />} />
          <Route path="/visualization/:visualizationId" element={<VisualizationPage />} />
          <Route path="/collection/:collectionId" element={<CollectionPage />} />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
