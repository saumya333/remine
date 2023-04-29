import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from './logo.png'
function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbars'>
        <div className='navbars-container'>
        
            <img className='navbars-logo' src={logo} alt='logo'></img>
         
          <div className='menus-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menus active' : 'nav-menus'}>
            <li className='navs-item'>
              <Link to='/' className='navs-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='navs-item'>
              <Link
                to='/services'
                className='navs-links'
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li className='navs-item'>
              <Link
                to='/contacts'
                className='navs-links'
                onClick={closeMobileMenu}
              >
                Contact Us
              </Link>
            </li>

            <li>
              <Link
                to='/sign-up'
                className='navs-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outlines'>Sign Up</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;