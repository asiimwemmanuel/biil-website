import React, { useContext } from 'react';
import './DropDown.css';
import { NavLink } from 'react-router-dom';
import Context from '../../Context/Context.jsx';
import { FaShoppingBag } from 'react-icons/fa';
import { IoIosContact } from 'react-icons/io';
import ContactUs from '../ContactUs/ContactUs.jsx';
import { IoMdHome } from 'react-icons/io';
import { FaCircleInfo } from 'react-icons/fa6';
import { IoMdContact } from 'react-icons/io';

function DropDown(props) {
  const ctx = useContext(Context);
  const year = new Date(Date.now()).getFullYear();

  return (
    <div>
      <div
        className="tsBG"
        onClick={() => {
          ctx.setIsDropVal(false);
        }}
      ></div>
      <div className="dropdown">
        <NavLink
          to="/"
          style={{
            marginTop: '10px',
            marginLeft: '0px',
            marginRight: '0px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          className="NavLinkDropDown"
          onClick={() => {
            ctx.setIsDropVal(false);
          }}
        >
          <IoMdHome
            style={{
              height: '28px',
              width: '28px',
              margin: 0,
              marginBottom: '5px',
            }}
          />
          Home
        </NavLink>
        <NavLink
          to="/about"
          style={{
            marginTop: '35px',
            marginLeft: '0px',
            marginRight: '0px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          className="NavLinkDropDown"
          onClick={() => {
            ctx.setIsDropVal(false);
          }}
        >
          <FaCircleInfo
            style={{
              height: '25px',
              width: '25px',
              marginBottom: '5px',
            }}
          />
          About
        </NavLink>

        <h1
          style={{
            color: 'white',
            marginTop: '40px',
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
            marginLeft: '0px',
            marginRight: '0px',
            flexDirection: 'column',
          }}
          className="NavLinkDropDown"
          onClick={() => {
            ctx.setContactCard(true);
            ctx.setIsDropVal(false);
          }}
        >
          <IoMdContact
            style={{
              height: '25px',
              width: '25px',
              marginBottom: '5px',
            }}
          />
          Contact Us
        </h1>
        {/* <h5
          style={{ position: 'absolute', bottom: '10px', textAlign: 'center' }}
          className="dropdown-copyright-text"
        >
          &copy; BIIL House {year}
        </h5> */}
      </div>
    </div>
  );
}

export default DropDown;
