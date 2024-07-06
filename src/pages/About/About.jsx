import React from 'react';
import './About.css';
import Header from '../../components/Header/Header';
import Image1 from '/src/assets/DOTI.jpeg';
import Image2 from '/src/assets/DOTI-front.jpg';
import Image3 from '/src/assets/Hope.jpeg';
import Image4 from '/src/assets/Hope-Front.jpeg';
import Image5 from '/src/assets/DOTI.jpeg';
import Image6 from '/src/assets/DOTI-front.jpg';
import Image7 from '/src/assets/Hope.jpeg';
import GroupSH from '/src/assets/Models-pic.jpeg';
import Footer from '../../components/Footer/footer';
import ScrollDownButton from '../../components/ScrollDownButton/ScrollDownButton.jsx';
import ProfilePic from '../../assets/barry-wood.png'; // Import your profile picture here
import ceo from '../../assets/ceo.jpg';
import ea from '../../assets/ea.jpg';
import rem from '../../assets/rem.jpg';
// import fs from "../../assets/fs.jpg";
import bdo from '../../assets/bdo.jpg';

const About = () => {
  return (
    <div className="about-page-container">
      <Header />
      <br />
      <br />
      <br />
      <br />
      <br />
      {/* <ScrollDownButton /> */}
      <div className="about-content">
        <div className="profile-container">
          <div>
            <img src={ceo} alt="Profile" className="profile-pic" />
          </div>
          <div className="description-container">
            <h2>Frank M. Katusiime</h2>
            <h3>CEO</h3>
            <p>
              Frank M. Katusiime, CEO of Business Initiatives International, is
              a seasoned entrepreneur with over three decades of diverse
              business experience, ranging from early ventures in trading to a
              strong presence in real estate. He holds a Bachelor of Commerce
              degree from Makerere University and two master's degrees from Bath
              University, UK. His career includes lecturing at Makerere
              University and 16 years at Uganda Revenue Authority. As a board
              member of several organizations, Katusiime leads his company in
              offering business solutions and training services globally.
            </p>
          </div>
        </div>
        <br />
        <br />
        <br />
        <hr />
        {/* <div style={{ borderBottom: '1px solid white', width: '90%', marginBottom: '10px' }}></div> */}
        <div className="profile-container">
          <div>
            <img src={ea} alt="Profile" className="profile-pic" />
          </div>
          <div className="description-container">
            <h2>Rosette Ahabwe</h2>
            <h3>Executive Assistant</h3>
            <p>
              Rosette Ahabwe, the Executive Assistant to the Managing Director,
              plays a pivotal role in managing the MD’s calendar, coordinating
              meetings, and handling office administration. With a focus on
              organisational efficiency, Rose oversees the scheduling of
              appointments, prepares performance reports, and ensures smooth
              daily operations of the MD’s office. She also manages
              communication, travel arrangements, and documentation, supporting
              the MD in strategic decision-making and maintaining high standards
              of administrative support for the executive team.
            </p>
          </div>
        </div>
        <br />
        <br />
        <br />
        <hr />
        <div className="profile-container">
          <div>
            <img src={rem} alt="Profile" className="profile-pic" />
          </div>
          <div className="description-container">
            <h2>Helen A. Katusiime</h2>
            <h3>Real Estate Manager</h3>
            <p>
              Helen A. Katusiime, the Real Estate Manager at BIIL, is
              responsible for overseeing the acquisition, management, and
              optimisation of the company’s property portfolio. Helen’s role
              includes negotiating rental agreements, managing property
              maintenance, and ensuring financial viability through effective
              budgeting and tenant relations. She also evaluates market trends,
              supervises property staff, and reports on estate performance,
              ensuring that BIIL’s real estate investments meet strategic
              objectives and contribute to the company’s growth.
            </p>
          </div>
        </div>
        <br />
        <br />
        <br />
        <hr />
        <div className="profile-container">
          <div>
            <img src={ProfilePic} alt="Profile" className="profile-pic" />
          </div>
          <div className="description-container">
            <h2>Prosper Kahwezi</h2>
            <h3>Field Supervisor</h3>
            <p>
              Prosper Kahweezi, The Field Supervisor at BIIL, is tasked with
              overseeing on-site operations and ensuring that projects meet
              quality and efficiency standards. This role involves supervising
              field staff, coordinating tasks, and ensuring compliance with
              safety regulations. The Field Supervisor acts as a liaison between
              the management team and field workers, ensuring that project
              objectives are met, and providing on-the-ground support to resolve
              issues and optimise performance.
            </p>
          </div>
        </div>
        <br />
        <br />
        <br />
        <hr />
        <div className="profile-container">
          <div>
            <img src={bdo} alt="Profile" className="profile-pic" />
          </div>
          <div className="description-container">
            <h2>Trevor Aineruhanga</h2>
            <h3>Business Development Officer</h3>
            <p>
              Trevor Aineruhanga, The Business Development Officer at BIIL,
              focuses on identifying and pursuing new business opportunities to
              drive the company's growth. This role involves market research,
              building client relationships, and developing strategic
              partnerships. The Business Development Officer is responsible for
              crafting business proposals, negotiating contracts, and exploring
              new markets, with the goal of expanding the company’s client base
              and increasing revenue.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
