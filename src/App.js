import { Routes, Route } from "react-router-dom";
import AboutPage from "./components/AboutPage";
import CollectionPage from "./components/CollectionPage";
import HomePage from "./components/HomePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/collection" element={<CollectionPage />} />
      </Routes>
    </div>
  );
}

export default App;
