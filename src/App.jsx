import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Serie from "./pages/serie/Serie";
import Movies from "./pages/movies/Movies";
import Lists from "./pages/lists/Lists";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/Series" element={<Serie />} />
        <Route path="/Listas" element={<Lists />} />
        <Route path="/Películas" element={<Movies />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
