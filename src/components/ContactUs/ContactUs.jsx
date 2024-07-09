import React, { useContext, useEffect } from 'react';
import { FaInstagram } from 'react-icons/fa';
import { IoIosCall } from 'react-icons/io';
import { IoClose } from 'react-icons/io5';
import { MdOutlineEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Context from '../../Context/Context';
import './ContactUs.css';

function ContactUs() {
  const ctx = useContext(Context);

  useEffect(() => {
    console.log('Contact Card State:', ctx.contactCard);
  }, [ctx.contactCard]);

  if (!ctx.contactCard) return null; // Render nothing if contactCard is false

  return (
    <div className="contact-us-container">
      <div
        className="background-overlay"
        onClick={() => ctx.setContactCard(false)}
      />
      <div className="contact-card">
        <div className="contact-header">
          <h3 className="contact-title">Contact Us</h3>
          <IoClose
            className="close-btn"
            onClick={() => ctx.setContactCard(false)}
          />
        </div>
        <p
          style={{ color: '#000000', marginLeft: '10px', marginRight: '10px' }}
        >
          Hello, Feel free to contact the members of the BIIL House using the
          contact details below. We're here to help and provide you with housing
          that suits you!
        </p>
        <div className="contact-content" style={{ maxHeight: '500px' }}>
          <div className="contact-item1">
            <div
              className="contact-link"
              style={{ color: '#004cb0' }}
            >
              <IoIosCall className="icon" />
              +256 772 403916
            </div>
          </div>
          <div className="contact-item2">
            <a
              href="mailto:fkatusiime@yahoo.com"
              className="contact-link"
              style={{ color: '#004cb0' }}
            >
              <MdOutlineEmail className="icon" />
              fkatusiime@yahoo.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
