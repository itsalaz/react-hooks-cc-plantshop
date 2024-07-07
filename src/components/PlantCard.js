import React, {useState} from "react";

export default function PlantCard({plant}) {
  const [inStock, setInStock] = useState(true)

  function handleStockClick() {
    setInStock(!inStock)
  }
  
  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}}</h4>
      <p>Price: ${plant.price}</p>
        <button className="primary" onClick={handleStockClick}>
          {inStock ? "In Stock" : "Out of Stock"}
      </button>
    </li>
  )
}

