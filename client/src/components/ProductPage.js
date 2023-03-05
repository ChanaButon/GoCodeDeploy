import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const [chosenProduct, setChosenProduct] = useState({});
  const { productId } = useParams();

  const fetchSingleProduct = async () => {
    console.log(productId)
    const response = await fetch(
      `http://fakestoreapi.com/products/${productId}`
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
    <div>
      {chosenProduct && <div>
        <p>{chosenProduct.title}</p>
        <p>{chosenProduct.description}</p>
        <p>{chosenProduct.price}</p>
        <p>{chosenProduct.category}</p>
        {/* <p>{chosenProduct.rating.rate}</p>
        <p>{chosenProduct.rating.count}</p> */}
        <img alt="product" src={chosenProduct.image} />
      </div>}
    </div>
  );
};

export default ProductPage;