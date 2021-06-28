import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="Navbar">
      <h3 className="Brand">Ranjan</h3>
      <ul className="Nav-links">
        <li className = "Nav-item">Home</li>
        <li className = "Nav-item">Projects</li>
        <li className = "Nav-item">Blogs</li>
        <li className = "Nav-item">Contacts</li>
      </ul>
    </nav>
  );
};

export default Navbar;