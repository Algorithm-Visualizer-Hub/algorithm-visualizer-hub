import { BrowserRouter, Route, Routes } from "react-router-dom";

import CollectionPage from "./components/CollectionPage";
import HomePage from "./components/HomePage";
import UserPage from "./components/UserPage";
import VisualizationPage from "./components/VisualizationPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={HomePage} />
        <Route path="/user/:userId" element={UserPage} />
        <Route path="/visualization/:visualizationId" element={VisualizationPage} />
        <Route path="/collection/:collectionId" element={CollectionPage} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
