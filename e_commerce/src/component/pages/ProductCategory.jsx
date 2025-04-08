import React from "react";
import { Link } from "react-router-dom";
import "./ProductCategory.css";

function ProductCategory() {
  return (
    <div className="category-container">
      <h2>Product Categories</h2>
      <ul>
        <li>
          <Link to="/products/category1" className="category-link">Category 1</Link>
        </li>
        <li>
          <Link to="/products/category2" className="category-link">Category 2</Link>
        </li>
      </ul>
    </div>
  );
}

export default ProductCategory;