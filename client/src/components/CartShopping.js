import React, { useContext } from "react";
// import { useState  } from "react";
import "./product-card.css"
import "./product-image.css"
import './product-info.css'
import { IoAdd } from 'react-icons/io5';
import { IoMdRemove } from 'react-icons/io';
import MyContext from "../MyContext";
import "./Cartshopping.css";
import { useNavigate } from "react-router-dom";








const Cartshopping=()=>{
  const navigate = useNavigate();
  const {setproductsBuy,productsBuy}=useContext(MyContext) 
  const handleClick = () => {
    navigate('/cartList', { state: { productsBuy } });
  };
  const addProduct =(id)=>{
    if(id){
      const updateList=(productsBuy&&productsBuy.map((product)=>{
        if(product._id===id){
          product.countProduct=product.countProduct+1
          return product
        }
        else{
          return product
        }
      }))
      console.log(updateList)
      setproductsBuy(updateList)

    }
  
  }
   const removeProduct=(id)=>{
    if(id){
      const updateList=(productsBuy&&productsBuy.map((product)=>{
        if(product._id===id){
          product.countProduct=product.countProduct-1
          if(product.countProduct!==0){
            return product
          }
          else
          {
            return null
          }
        }
        else{
          return product
        }

      })).filter((element)=>element!==null);
      setproductsBuy(updateList)
    }
   }

   const total = productsBuy.reduce((acc, product) => {
    if (product && product.price) {
      return acc + product.price * product.countProduct;
    } else {
      return acc;
    }
  }, 0);
  
  
  

   return (
    <div className="cart-container">
      <div className="cart-items">
        {productsBuy &&
          productsBuy.map((product) => (
              <div className="cart-item" key={product._id}>
                <div className="product-image">
                  <img src={product.image} alt={product.title} />
                </div>
                <div className="product-details">
                  <h5 className="product-title">{product.title}</h5>
                  <div className="product-price">{product.price} USD</div>
                  <div className="product-quantity">
                    <IoMdRemove  onClick={() => removeProduct(product._id)}/>
                    <span >{product.countProduct}</span>
                    <IoAdd onClick={() => addProduct(product._id)}/>
                    {/* <GiTrashCan color="red" fontSize={20} onClick={()=>remove(product._id)}/> */}
                    
                 

                  </div>
                </div>
                </div>
                
               
            ) 
          )}
      </div>
       <div className="cart-summary">
       <div className="total-price">Total: {total} USD</div>
       <button className="checkout-button" onClick={handleClick}>Checkout</button>
       
      
       </div>
       
   </div>

  );
};

export default Cartshopping;