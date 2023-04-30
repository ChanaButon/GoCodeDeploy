import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductPage.css"

const ProductPage = () => {
  const [chosenProduct, setChosenProduct] = useState({});
  const { productId } = useParams();

  const fetchSingleProduct = async () => {
    console.log(productId)
    const response = await fetch(
      `http://localhost:8000/api/productId/${productId}`
    );
    const data = await response.json();
    setChosenProduct(data);
  };

  useEffect(() => {
    console.log(productId)
    fetchSingleProduct();
  }, [productId]);

  console.log(chosenProduct);
  return (
    <div className="productItem">
      {chosenProduct && <div>
        
        <img alt="productImg" src={chosenProduct.image} />
        <p className="Ptitle"><strong>Title:</strong> {chosenProduct.title}</p>
        <p className="Pdescription"><strong>Description:</strong> {chosenProduct.description}</p>
        <p className="Pcategory"><strong>Category:</strong> {chosenProduct.category}</p>
        <p className="Pprice"><strong>Price:</strong> {chosenProduct.price}</p>
        
        
      </div>}
    </div>
  );
};

export default ProductPage;