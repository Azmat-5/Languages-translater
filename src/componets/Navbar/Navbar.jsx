// src/components/Navbar.jsx
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="navbar">
      <h1 className="logo">Translator</h1>
      <nav className={`nav-links ${isMobileMenuOpen ? 'nav-links-mobile' : ''}`}>
        <a href="#home" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
        <a href="#features" onClick={() => setIsMobileMenuOpen(false)}>Features</a>
        <a href="#languages" onClick={() => setIsMobileMenuOpen(false)}>Languages</a>
        <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
      </nav>
      <button className="mobile-menu-icon" onClick={toggleMenu}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </button>
    </header>
  );
};

export default Navbar;
