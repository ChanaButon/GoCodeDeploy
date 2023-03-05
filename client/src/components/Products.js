import './products.css'
import Product from './Product'
import { useContext } from "react";
import MyContext from "../MyContext"
// import productsData from '../data/productsData.json'



const Products = () => {
  const {productsData} = useContext(MyContext)
  return (
    <section className="products">
      {productsData && productsData.map((product,i) => { 
        // const RandomNumber = Math.floor(Math.random()*1000000 + i)
        return(
        <Product
          key={product.id}
          id={product.id}
          imgUrl={product.image}
          title={product.title}
          price={product.price}
          description={product.description}
        />
      )})}
    </section>
  );
};

export default Products;
