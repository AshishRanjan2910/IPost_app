import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
     <nav>
      <div class="container">
          <div class="branding">
              <Link to = "/"><i class="fas fa-file-invoice-dollar"></i>IPost</Link>
              {/* <span class="tooltip">Invoice Discounting made simple Now</span> */}
          </div>
          <ul>
              <li><Link to = "/" className = "Nav-item">Home</Link></li>
              {/* <li><Link to = "/FIs" className = "Nav-item">Financial Institution</Link></li> */}
              <li><Link to = "/Invoice" className = "Nav-item">Invoice Form</Link></li>
              <li><Link to = "/AboutUS" className = "Nav-item">About Us</Link></li>
          </ul>
      </div>
    </nav>
  );
};

export default Navbar;