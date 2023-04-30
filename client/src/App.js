import Products from './components/Products'
import Nav from './components/Nav'
import './App.css'
import MyContext from './MyContext';
import { useState ,useEffect } from 'react';
import TemporaryDrawer from './components/Drawer'
import { BrowserRouter as Router, Route, Link, json } from "react-router-dom";
import Header from './components/Header';




function App() {

  
  //const [productAdd,setproductAdd]= useState("")
  const getAllProducts = async () => {
    const response = await fetch('http://localhost:8000/api/products');
    const data = await response.json();
    setProductsData(data);
    setproductsCopy(data);
    console.log(data)
    console.log(productsData)
  };

  const [productsData, setProductsData] = useState([]);
  const [productsCopy, setproductsCopy] = useState([]);
  const [productsBuy, setproductsBuy] = useState([]);

  useEffect(() => {
    getAllProducts();
    console.log(productsData)
  }, []);

  useEffect(() => {
    console.log(productsBuy);
  }, [productsBuy]);



  return (
    //  <BrowserRouter>
    <MyContext.Provider value={{ productsData, setProductsData, getAllProducts, productsCopy, setproductsBuy, productsBuy }}>
      <div className='App'>
        {/* <img src="https://ik.imagekit.io/tbu0ha010/sport.jpeg?updatedAt=1682557307114"  
        alt='you site logo'/> */}

        <Header/>
        <Nav />
        <Products />

      </div>
    </MyContext.Provider>

    //  </BrowserRouter>
  );
}


export default App;
