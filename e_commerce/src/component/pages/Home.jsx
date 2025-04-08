import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div>
      <h1>Welcome to Our Store</h1>
      <Link to="/cart" className="cart-icon">
        <i className="fas fa-shopping-cart"></i>
      </Link>
      <br />
      <Link to="/categories">Browse Categories</Link>
    </div>
  );
}

export default Home;