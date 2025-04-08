import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/pages/Home";
import Cart from "./component/pages/Cart";
import './App.css';
import ProductCategory from "./component/pages/ProductCategory"; 
import ProductCard from "./component/pages/ProductCard"; 
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/categories" element={<ProductCategory />} />
        <Route path="/products/:category" element={<ProductCard />} />
      </Routes>
    </Router>
  );
}

export default App;