import React from 'react';
import './Header.css';
import TemporaryDrawer from './Drawer';

const Header = () => {
  return (
    <header className="Header">
      <TemporaryDrawer />
      <h1 className="Logo">Online Sports Store</h1>
      <nav className="Navigation">
        <a href="">Home</a>
        <a href="about">About</a>
        <a href="/contact">Contact</a>
        <a href="/loginform">Server</a>
      </nav>
    </header>
  );
};

export default Header;