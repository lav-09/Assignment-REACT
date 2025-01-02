import React from 'react';
import './Header.css';

const Header = () => (
  <header className="header">
    <h1>My React Website</h1>
    <nav>
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#services">Services</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>
);

export default Header;