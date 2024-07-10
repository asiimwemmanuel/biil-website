import React, { useContext, useEffect, useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { Link, NavLink } from 'react-router-dom';
import Context from '../../Context/Context';
import Cart from '../Cart/Cart.jsx';
import ContactUs from '../ContactUs/ContactUs.jsx';
import DropDown from '../Drop-Down/DropDown';
import './Header.css';

function Header() {
  const ctx = useContext(Context);
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollThreshold = 460; // Change this to whatever scroll level you want

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="header">
      <div className="backdrop"></div>
      {ctx.isDrop ? <DropDown /> : ''}
      {ctx.modal ? <Cart /> : ''}
      {ctx.contactCard ? <ContactUs /> : ''}
      <div className="logo-container">
        <Link
          to="/"
          className={scrollPosition > scrollThreshold ? 'logo2' : 'logo1'}
        >
          <h1
            style={{
              margin: 0,
              fontSize: '50px',
            }}
          >
            BIIL
          </h1>
        </Link>
      </div>
      <div className="nav-container">
        <div className="nav-links">
          <NavLink to="/" className="NavLink">
            Home
          </NavLink>
          <NavLink to="/about" className="NavLink">
            About Us
          </NavLink>
          <button
            className="contact-btn"
            onClick={() => {
              setTimeout(() => {
                window.open('https://docs.google.com/forms/d/e/1FAIpQLSdJFX34ynYmdiQf1M15EzUfiobW13wEZq01LRIPjBgrei7tKw/viewform?usp=sf_link', '_blank');
              }, 3000);
              ctx.setContactCard(true);
            }}
          >
            Contact Us
          </button>
        </div>
        <FiMenu
          className="Menu-icon"
          onClick={() => {
            ctx.setIsDropVal(true);
          }}
          style={{
            color: scrollPosition > scrollThreshold ? '#000000' : '#ffffff',
          }}
        />
      </div>
    </div>
  );
}

export default Header;
