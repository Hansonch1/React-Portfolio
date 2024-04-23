import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  return (
    <header>
      <h1>Developer's Name</h1>
      <nav>
        <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About Me</Link>
        <Link to="/portfolio" className={location.pathname === '/portfolio' ? 'active' : ''}>Portfolio</Link>
        <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link>
        <Link to="/resume" className={location.pathname === '/resume' ? 'active' : ''}>Resume</Link>
      </nav>
    </header>
  );
};

export default Header;
