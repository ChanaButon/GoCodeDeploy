import React from 'react';
import './Header.css';
import TemporaryDrawer from './Drawer';

const Header = () => {
  return (
    <header className="Header">
      <TemporaryDrawer />
      <div className="Logo">sport</div>
      <nav className="Navigation">
        <a href="">Home</a>
        <a href="s#">About</a>
        <a href="#">Contact</a>
        <a href="/admin">Server</a>
      </nav>
    </header>
  );
};

export default Header;