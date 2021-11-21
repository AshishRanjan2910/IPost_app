import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
 
const Navbar = () => {
  return (
    <nav className="Navbar">
      <h3 className="Brand">Ranjan</h3>
      <ul className="Nav-links">
        <Link to = "/" className = "Nav-item">Home</Link>
        <Link to = "/Projects" className = "Nav-item">Projects</Link>
        <Link to = "/Blogs" className = "Nav-item">Blogs</Link>
        <Link to = "/Contact" className = "Nav-item">Contacts</Link>
      </ul>
    </nav>
  );
};

export default Navbar;