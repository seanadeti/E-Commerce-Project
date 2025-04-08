import React from "react";
import { useParams } from "react-router-dom";
import "./ProductCard.css";

const products = {
  category1: [
    { id: 1, name: "Gaming Laptop", price: "GH₵1200", img: "https://via.placeholder.com/150?text=Gaming+Laptop" },
    { id: 2, name: "Mechanical Keyboard", price: "GH₵150", img: "https://via.placeholder.com/150?text=Mechanical+Keyboard" },
  ],
  category2: [
    { id: 3, name: "Wireless Headphones", price: "GH₵200", img: "https://via.placeholder.com/150?text=Wireless+Headphones" },
    { id: 4, name: "Smartwatch", price: "GH₵250", img: "https://via.placeholder.com/150?text=Smartwatch" },
  ],
};

function ProductCard() {
  const { category } = useParams();
  const selectedProducts = products[category] || [];

  return (
    <div className="card-container">
      <h2 className="card-header">Products in {category}</h2>
      <div className="card-grid">
        {selectedProducts.map((product) => (
          <div key={product.id} className="card">
            <img src={product.img} alt={product.name} className="card-image" />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductCard;