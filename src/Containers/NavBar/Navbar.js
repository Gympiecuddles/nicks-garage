import React, { useState, useEffect } from 'react';
import { Button } from '../../../../nicks-garage/src/Containers/Button';
import { HashLink } from 'react-router-hash-link';
import './Navbar.css';

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
      <nav className='navbar'>
        <div className='navbar-container'>
          <HashLink
          to={'/#home'} 
          className='navbar-logo' 
          onClick={closeMobileMenu}
          scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'center' })}
          >
            Nick's Garage&nbsp;
            <i class='fas fa-wrench' />
          </HashLink>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <HashLink 
              to={'/#home'} 
              className='nav-links' 
              onClick={closeMobileMenu}
              scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'center' })}
              >
                Home
              </HashLink>
            </li>
            <li className='nav-item'>
              <HashLink
                smooth
                to={'/#services'}
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Services
              </HashLink>
            </li>
            <li className='nav-item'>
              <HashLink
                to={'/#about'}
                className='nav-links'
                onClick={closeMobileMenu}
                scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}
              >
                About Us
              </HashLink>
            </li>

            <li>
              <HashLink
                to={'/#contact'}
                className='nav-links-mobile'
                onClick={closeMobileMenu}
                scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'center' })}
              >
                Contact
              </HashLink>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline' buttonSize='btn--medium'>Contact</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;