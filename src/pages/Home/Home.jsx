import React, { useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CardImg1 from '../../assets/card-img1.jpeg';
import CardImg2 from '../../assets/card-img2.jpeg';
import CardImg3 from '../../assets/card-img3.jpeg';
import CardImg4 from '../../assets/card-img4.jpeg';
import CardImg5 from '../../assets/card-img5.jpeg';
import CardImg6 from '../../assets/card-img6.jpeg';
import CardImg7 from '../../assets/card-img7.jpeg';
import CardImg8 from '../../assets/card-img8.jpeg';
import CardImg9 from '../../assets/card-img9.jpeg';
import FillBox from '../../assets/Fill-Box.png';
import Card from '../../components/Card/Card';
import ContactUs from '../../components/ContactUs/ContactUs.jsx';
import Footer from '../../components/Footer/footer';
import Header from '../../components/Header/Header';
import Map from '../../components/Map/Map.jsx';
import './Home.css';

function Home() {
  useEffect(() => {
    if (!localStorage.getItem('CartItems')) {
      localStorage.setItem('CartItems', '[]');
    }
  }, []);

  return (
    <div
      style={{
        color: 'white',
        width: '100vw',
        position: 'absolute',
        height: '100vh',
        top: 0,
        left: 0,
      }}
    >
      <Header />
      <div style={{ overflowX: 'hidden' }}>
        <Carousel indicators={false} interval={3000}>
          <Carousel.Item>
            <div className="carousel-pic"></div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-pic2"></div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-pic3"></div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-pic4"></div>
          </Carousel.Item>
        </Carousel>
        {/* <Modal /> */}
        <div className="fill-box">
          <img src={FillBox} alt="Fill Box" />

          <div className="fill-box-text">Your Perfect</div>
        </div>
        <h1
          className="fill-box-text"
          style={{
            marginTop: '-75px',
            fontSize: '130px',
            // backgroundColor: 'blue',
            padding: '0px',
          }}
        >
          Home
        </h1>
      </div>
      <h2 className="explore">Explore our locations</h2>
      <div className="cardDiv">
        <Card
          title="Kitetika Bungalows"
          price={500000}
          image={CardImg1}
          description="2 bedrooms, 1 bathroom"
        />
        <Card
          title="Janda Bungalows"
          price={800000}
          image={CardImg2}
          description="2 bedrooms, 2 bathrooms"
        />
        <Card
          title="Bulenga Flats"
          price={500000}
          image={CardImg3}
          description="2 bedrooms, 2 bathrooms"
        />
        <Card
          title="Mbalwa Bungalows"
          price={600000}
          image={CardImg4}
          description="2 bedrooms, 1 bathroom"
        />
        <Card
          title="Zanna Bungalows"
          price={700000}
          image={CardImg5}
          description="2 bedrooms, 1 bathroom"
        />
        <Card
          title="Najjanankumbi Bungalow"
          price={1000000}
          image={CardImg6}
          description="2 bedrooms, 1 bathroom"
        />
        <Card
          title="Kabowa Bungalow"
          price={1500000}
          image={CardImg7}
          description="3 bedrooms, 1 bathroom"
        />
        <Card
          title="Kabowa micro-residences"
          price={300000}
          image={CardImg8}
          description="1 bedroom, 1 bathroom"
        />
        <Card
          title="Kabowa Apartments"
          price={1200000}
          image={CardImg9}
          description="2 bedrooms, 2 bathrooms"
        />
      </div>
      <div className="map-container">
        <h1
          style={{
            color: 'black',
            fontFamily: 'Volterra-Regular',
            fontSize: '35px',
            marginTop: '30px',
          }}
        >
          BIIL
        </h1>
        <p style={{ color: '#000000' }}>
          Get directions to our <br />
          locations using the map
        </p>
        <Map />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
