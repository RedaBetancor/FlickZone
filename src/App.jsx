import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Serie from "./pages/serie/Serie";
import List from "./pages/List/List";
import SerieDescripcion from "./pages/serie/SerieDescripcion";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Series" element={<Serie />} />
        <Route path="/Series/:id" element={<SerieDescripcion />} />
        <Route path="/Lista" element={<List />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
