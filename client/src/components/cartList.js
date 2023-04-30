import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';

const CartList = () => { 
  const location = useLocation();
  const productsBuy = location.state.productsBuy || [];
  console.log(productsBuy)
  return(<div>
      {productsBuy.map((product) => (
        <div key={product._id}>
          <h3>{product.title}</h3>
          <div className="product-image">
                  <img src={product.image} alt={product.title} />
                </div>
          <p>{product.description}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </div>)

};

export default CartList;