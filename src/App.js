import { Routes, Route } from "react-router-dom";
import AboutPage from "./components/AboutPage";
import ProductPage from "./components/ProductPage";
import HomePage from "./components/HomePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/product" element={<ProductPage />} />
      </Routes>
    </div>
  );
}

export default App;
