import React from 'react';
import './footer.css'; // Import custom footer styles if needed

import { FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { MdOutlineEmail } from 'react-icons/md';
import { PiYoutubeLogoLight } from 'react-icons/pi';
import FillBox from '../../assets/Fill-Box.png';

function Footer() {
  const year = new Date(Date.now()).getFullYear();
  return (
    <footer className="footer">
      <div className="footer-content">
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            marginTop: '15px',
            marginLeft: '15px',
            marginRight: '15px',
          }}
        >
          <h1
            style={{
              fontFamily: 'Volterra-Regular',
              fontSize: '35px',
              color: '#ffffff',
              width: '40%',
              textAlign: 'left',
            }}
          >
            BIIL
          </h1>

          <h1
            style={{
              fontSize: '35px',
              color: '#ffffff',
              width: '60%',
              textAlign: 'right',
            }}
            className="footer-about-us"
          >
            About Us
          </h1>
        </div>
        <p className="footer-text">
          Biil is a property firm specializing in the hospitality industry. The
          firm manages a diverse portfolio of properties, including apartment
          flats and joint bungalows. This project was developed as a paid
          commission.
        </p>
      </div>

      <h3 style={{ fontSize: '18px' }}>&copy; BIIL House {year}</h3>
    </footer>
  );
}

export default Footer;
