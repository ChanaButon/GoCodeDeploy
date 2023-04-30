import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import NotFoundPage from './components/NotFoundPage';
import ProductPage from './components/ProductPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Admin from './components/Admin';
import LoginForm from './components/LoginForm';
import AboutPage from './components/About';
import Contact from './components/Contact';
import CartList from './components/CartList';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} /> 
        <Route path="/admin" element={<Admin />}/>
        <Route path="loginform" element={<LoginForm />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="about" element={<AboutPage />}/>
        <Route path="products/:productId" element={<ProductPage />} />
        <Route path="admin/products/:productId" element={<ProductPage />} />
        <Route  path="/cartList" element={<CartList />} />
        <Route path="*" element={<NotFoundPage />} />
       
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);