import React from 'react';
import './About.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/footer';
import ceo from '../../assets/ceo.jpg';
import ea from '../../assets/ea.jpg';
import rem from '../../assets/rem.jpg';
import ProfilePic from '../../assets/barry-wood.png';
import bdo from '../../assets/bdo.jpg';

const profiles = [
  {
    name: 'Frank M. Katusiime',
    title: 'CEO',
    img: ceo,
    description: `Frank M. Katusiime, CEO of Business Initiatives International, has over 30 years of experience in trading and real estate. He holds a Bachelor of Commerce and two master's degrees. Katusiime also lectured at Makerere University and worked 16 years at Uganda Revenue Authority. He leads his company in providing global business solutions and training.`,
  },
  {
    name: 'Rosette Ahabwe',
    title: 'Executive Assistant',
    img: ea,
    description: `Rosette Ahabwe, Executive Assistant to the Managing Director, manages the MD's calendar, coordinates meetings, and handles office administration. She oversees scheduling, prepares reports, and ensures smooth daily operations. Rose also manages communication, travel, and documentation, supporting strategic decisions and maintaining high administrative standards.`,
  },
  {
    name: 'Helen A. Katusiime',
    title: 'Real Estate Manager',
    img: rem,
    description: `Helen A. Katusiime, Real Estate Manager at BIIL, oversees property acquisition, management, and optimization. She negotiates rental agreements, manages maintenance, and ensures financial viability. Helen also evaluates market trends, supervises staff, and reports on performance, ensuring BIIL's real estate investments meet strategic goals and drive growth.`,
  },
  {
    name: 'Prosper Kahwezi',
    title: 'Field Supervisor',
    img: ProfilePic,
    description: `Prosper Kahweezi, Field Supervisor at BIIL, oversees on-site operations to ensure quality and efficiency. He supervises field staff, coordinates tasks, and ensures safety compliance. As a liaison between management and field workers, Prosper ensures project objectives are met and provides on-the-ground support to resolve issues and optimize performance.`,
  },
  {
    name: 'Trevor Aineruhanga',
    title: 'Business Development Officer',
    img: bdo,
    description: `Trevor Aineruhanga, Business Development Officer at BIIL, drives growth by identifying and pursuing new business opportunities. He conducts market research, builds client relationships, and develops strategic partnerships. Trevor crafts business proposals, negotiates contracts, and explores new markets to expand the client base and increase revenue.`,
  },
];

const About = () => {
  return (
    <div className="about-page-container">
      <Header />
      <div className="about-content">
        <section className="intro-section" style={{ marginTop: '70px' }}>
          <h1>Meet Our Team</h1>
          <p>
            We are dedicated to delivering the best solutions and services.
            Learn more about the talented individuals who lead our company.
          </p>
        </section>
        {profiles.map((profile, index) => (
          <div className="profile-container" key={index}>
            <img
              src={profile.img}
              alt={`${profile.name} Profile`}
              className="profile-pic"
            />
            <div className="description-container">
              <h2>{profile.name}</h2>
              <h3>{profile.title}</h3>
              <p style={{ textAlign: 'justify' }}>{profile.description}</p>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default About;
