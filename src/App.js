import { BrowserRouter, Route, Routes } from "react-router-dom";

import ListPage from "./components/ListPage";
import UserPage from "./components/UserPage";
import VisualizationPage from "./components/VisualizationPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={UserPage} />
        <Route path="/user/:userId" element={UserPage} />
        <Route path="/visual/:visualId" element={VisualizationPage} />
        <Route path="/list/:listId" element={ListPage} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
