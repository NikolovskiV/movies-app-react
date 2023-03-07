import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Cartoon from "./pages/cartoon/Cartoon";
import Home from "./pages/home/Home";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/cartoon" element={<Cartoon />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
