import React from 'react';
import './footer.css'; // Import custom footer styles if needed

import { FaInstagram } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';
import { PiYoutubeLogoLight } from 'react-icons/pi';
import { Link } from 'react-router-dom';

function Footer() {
  const year = new Date(Date.now()).getFullYear();
  return (
    <footer className="footer">
      <div className="footer-content">
        <h1 className="footer-heading">&copy; Conspiracy UG</h1>
        <p className="footer-text">For all your real estate needs</p>
      </div>
      <div className="social-links">
        <div
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
          }}
          className="footer-social-div"
        >
          <a
            href="mailto:fkatusiime@yahoo.com"
            className="social-link"
            id="social-link3"
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <MdOutlineEmail style={{ height: '40px', width: '40px' }} />
            <i className="fas fa-envelope"></i> Email us
          </a>
        </div>
      </div>
      <h3 style={{ fontSize: '18px' }}>
        &copy; {year} Business Initiatives International Limited. All rights reserved
      </h3>
    </footer>
  );
}

export default Footer;
