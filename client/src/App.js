import Products from './components/Products'
import Nav from './components/Nav'
import './App.css'
import MyContext from './MyContext';
import { useState,useEffect } from 'react';
import TemporaryDrawer from './components/Drawer'
// import * as ReactDOM from "react-dom";
// import { BrowserRouter } from "react-router-dom";




function App() {

  const [productsData, setProductsData] = useState([]);
  const [productsCopy, setproductsCopy] = useState([]);
  const [productsBuy, setproductsBuy] = useState([]);
  //const [productAdd,setproductAdd]= useState("")
  const getAllProducts = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    setProductsData(data);
    setproductsCopy(data);
  };


  useEffect(() => {
    getAllProducts();
  }, []);
  useEffect(() => {
    console.log(productsBuy);
  }, [productsBuy]);



  return (
    //  <BrowserRouter>
    <MyContext.Provider value={{ productsData, setProductsData, getAllProducts, productsCopy, setproductsBuy, productsBuy }}>
      <div className='App'>
        <TemporaryDrawer />
        <Nav />
        <Products />

      </div>
    </MyContext.Provider>

    //  </BrowserRouter>
  );
}


export default App;
