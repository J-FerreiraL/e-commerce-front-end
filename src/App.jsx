import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import {ProductViewPage} from "./pages/ProductViewPage/ProductViewPage";
import ProductListingPage from "./pages/ProductListingPage/ProductListingPage";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/product-view" element={<ProductViewPage />} />
        <Route path="/product-listing" element={<ProductListingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
