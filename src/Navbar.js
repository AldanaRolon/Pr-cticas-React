import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src='https://showroom.smartraining.cl/pluginfile.php/2518/mod_scorm/content/1/logo_st.png' alt='Logo' className='logo-image'/>
      </div>
      <div className='navbar-text'>Generalidades de las IAAS</div>
      <div className='progress-container'>
        <div className='progress-bar'>
          <div className='progress-bar-filled'></div>
      </div>
      <div className='progress-number'>0/22</div>
      </div>

      <div className="hamburger-menu" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      
    </nav>
  );
}

export default Navbar;

