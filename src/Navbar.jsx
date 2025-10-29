import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const handleLinkClick = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        <div className="nav-container">
          <img className="mainlogo" src="Logo.png" alt="Logo" />

          <button className="hamburger" onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>

          <div className="nav-links-desktop">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/About" className="nav-link">About</Link>
            <Link to="/Product" className="nav-link">Product</Link>
            <Link to="/Content" className="nav-link">Content</Link>
            <button className="schedule-btn">Schedule A Call</button>
          </div>
        </div>
      </nav>

      {/* Overlay menu for mobile */}
      <div className={`mobile-menu ${isOpen ? "show" : ""}`}>
        <div className="mobile-links">
          <Link to="/" className="mobile-link" onClick={handleLinkClick}>Home</Link>
          <Link to="/About" className="mobile-link" onClick={handleLinkClick}>About</Link>
          <Link to="/Product" className="mobile-link" onClick={handleLinkClick}>Product</Link>
          <Link to="/Content" className="mobile-link" onClick={handleLinkClick}>Content</Link>
          <button className="mobile-btn" onClick={handleLinkClick}>Schedule A Call</button>
        </div>
      </div>

      {/* Background overlay blur */}
      {isOpen && <div className="menu-overlay" onClick={toggleMenu}></div>}
    </>
  );
}

export default Navbar;
