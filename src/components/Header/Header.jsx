import React, { useState, useEffect, useContext } from 'react';
import './Header.css';
import { NavLink, Link } from 'react-router-dom';
import Context from '../../Context/Context';
import DropDown from '../Drop-Down/DropDown';
import { FiMenu } from 'react-icons/fi';
import Hope from '/src/assets/hope.jpg';
import Reckless from '/src/assets/Reckless.png';
import Overthinker from '/src/assets/DOTI.jpeg';

import Cart from '../Cart/Cart.jsx';
import Modal from '../Modal/Modal.jsx';

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
      {ctx.contactCard ? <Modal /> : ''}
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
      <div className="central-header-div">
        <div className="nav-links">
          <NavLink to="/" className="NavLink" style={{ marginLeft: '50px' }}>
            Home
          </NavLink>
          <NavLink to="/about" className="NavLink">
            About Us
          </NavLink>
        </div>
        {/* <div className="search-container">
          <CiSearch
            style={{
              height: '28px',
              width: '28px',
              cursor: 'pointer',
            }}
          />
          <input
            type="text"
            placeholder="Search for products..."
            className="search-box"
            value={searchTerm}
            onChange={handleChange}
          />
          <div className="search-underline"></div>
          <div className="search-results">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="search-item"
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="product-image"
                  style={{
                    height: '80px',
                    width: '80px',
                    borderRadius: '50px',
                    objectFit: 'cover',
                  }}
                />
                <p style={{ marginLeft: '10px' }}>{product.title}</p>
              </div>
            ))}
          </div>
        </div> */}
      </div>
      <div
        className="icons-container"
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          paddingRight: '10px',
          // marginRight: '-80px',
        }}
      >
        <button
          className="contact-btn"
          onClick={() => {
            ctx.setContactCard(true);
          }}
        >
          Contact Us
        </button>
        <div
          style={{
            display: 'flex',
          }}
        >
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
        {/* <div className="icon-container" style={{ marginRight: '5px' }}>
          <FaShoppingBag
            className="icon"
            onClick={() => {
              ctx.setModalVal(true);
            }}
            title="Shopping Cart"
          />
          <div
            className={ctx.animateCart ? 'notification-active' : 'notification'}
            style={{
              display: cartItems.length == 0 ? 'none' : 'flex',
            }}
          >
            {cartItems
              ? computeCost(cartItems).totalQuantity.toLocaleString('en-US')
              : 0}
          </div>
          <div className="hover-ring"></div>
        </div> */}
        {/* <div className="icon-container">
          <FaUser className="icon" />
          <div className="hover-ring"></div>
        </div> */}
        {/* <button
          style={{
            color: 'white',
            border: '1px solid white',
            marginLeft: '20px',
          }}
        >
          Login
        </button> */}
      </div>
    </div>
  );
}

export default Header;
