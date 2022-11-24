import { Routes, Route } from "react-router-dom";
import AboutPage from "./components/AboutPage";
import ProductPage from "./components/ProductPage";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import LoginPage from "./components/LoginPage"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
