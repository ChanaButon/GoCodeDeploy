import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import Checkout from "./Checkout";
import './CartList.css'

const CartList = () => {
  const location = useLocation();
  const productsBuy = location.state.productsBuy || [];

  const [cartItems, setCartItems] = useState(productsBuy);

  const total = cartItems.reduce((acc, product) => {
    if (product && product.price) {
      return acc + product.price * product.countProduct;
    } else {
      return acc;
    }
  }, 0);

  const handleRemoveProduct = (productId) => {
    const updatedCartItems = cartItems.filter(item => item._id !== productId);
    setCartItems(updatedCartItems);
  }

  const handleUpdateQuantity = (productId, quantity) => {
    const updatedCartItems = cartItems.map(item => {
      if (item._id === productId) {
        return { ...item, quantity };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  }

  return (
    <div className="cart-container1">
      {cartItems.length > 0 ? (
        <>
          <div className="product-list">
            {cartItems.map((product) => (
              <div className="product-card" key={product._id}>
                <div className="product-image">
                  <img src={product.image} alt={product.title} />
                </div>
                <div className="product-details">
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                  <p>{product.price}</p>
                  <div className="product-quantity">
                    <input
                      type="number"
                      min="1"
                      max="10"
                      defaultValue={product.countProduct}
                      onChange={(e) => handleUpdateQuantity(product._id, e.target.value)}
                    />
                    <button onClick={() => handleRemoveProduct(product._id)}>Remove</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <Checkout total={total}/>
            <div className="total-price">Total: {total} USD</div>
            <button className="checkout-btn">Checkout</button>
          </div>
        </>
      ) : (
        <div className="empty-cart">Your cart is currently empty.</div>
      )}
    </div>
  );
};

export default CartList;
