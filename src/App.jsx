import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import PlantTree from "./pages/PlantTree.jsx";
import TreeDetails from "./pages/TreeDetails.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plant" element={<PlantTree />} />
        <Route path="/tree/:id" element={<TreeDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
