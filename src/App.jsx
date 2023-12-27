import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import Menu from "./page/Menu";
import Query from "./page/Query";
import About from "./page/About";
import Home from "./page/Home";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Query />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
