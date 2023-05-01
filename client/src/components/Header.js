import React from 'react';
import './Header.css';
import TemporaryDrawer from './Drawer';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <header className="Header">
      <TemporaryDrawer />
      <h1 className="Logo">Online Sports Store</h1>
      <nav className="Navigation">
        <a href="">Home</a>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/loginform">Server</Link>
      </nav>
    </header>
  );
};

export default Header;