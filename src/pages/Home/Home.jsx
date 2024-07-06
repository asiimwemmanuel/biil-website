import React, { useEffect } from 'react';
import './Home.css';
import Header from '../../components/Header/Header';
import Card from '../../components/Card/Card';
import CardImg1 from '../../assets/card-img1.jpeg';
import Pic3 from '/src/assets/image3.png';
import Pic2 from '/src/assets/image2.png';
import Footer from '../../components/Footer/footer';
import FillBox from '../../assets/Fill-Box.png';
import Carousel from 'react-bootstrap/Carousel';
// import { Parallax } from 'react-scroll-parallax';
// import ScrollDownButton from '../../components/ScrollDownButton/ScrollDownButton.jsx';

function Home() {
  useEffect(() => {
    if (!localStorage.getItem('CartItems')) {
      localStorage.setItem('CartItems', '[]');
    }

    // // Check if the screen width is greater than 12 inches (1200 pixels)
    // if (window.innerWidth > 900) {
    //   const handleScroll = () => {
    //     const scrollTop = window.scrollY;
    //     const modelsPic = document.querySelector('.models-pic');
    //     const modelsPic2 = document.querySelector('.models-pic2');
    //     modelsPic.style.backgroundPositionY = `${scrollTop * 0.5}px`; // Adjust the parallax effect speed as needed
    //     modelsPic2.style.backgroundPositionY = `${scrollTop * -0.1}px`; // Adjust the parallax effect speed as needed
    //   };

    //   window.addEventListener('scroll', handleScroll);

    //   return () => {
    //     window.removeEventListener('scroll', handleScroll);
    //   };
    // }
  }, []);
  async function sendProductDataToFirebase(productName, description) {
    // Firebase URL
    const firebaseUrl =
      'https://conspiracy-67f09-default-rtdb.firebaseio.com/products.json';

    // Data to be sent
    const data = {
      productName: productName,
      description: description,
    };

    // Request options
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };

    try {
      // Make the fetch request
      const response = await fetch(firebaseUrl, requestOptions);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const responseData = await response.json();
      console.log('Data sent successfully:', responseData);
      // Handle success
    } catch (error) {
      console.error('Error sending data to Firebase:', error.message);
      // Handle error
    }
  }
  // sendProductDataToFirebase(
  //   'T-Shirts',
  //   'Step into style with our chic T-shirts. Discover our trendy T-shirts, crafted for comfort and style.'
  // );

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
        <div className="fill-box">
          <img src={FillBox} alt="Fill Box" />

          <div className="fill-box-text">Your Perfect</div>
        </div>
        <h1
          className="fill-box-text"
          style={{
            marginTop: '-80px',
            fontSize: '130px',
            // backgroundColor: 'blue',
            padding: '0px',
          }}
        >
          Home
        </h1>
      </div>
      <h2 className="explore">Explore our locations</h2>
      <Card
        title="Kitetika bungalows"
        price={500000}
        image={CardImg1}
        description="3 bedroom Apartments and Office Rental Space Available"
      />
      {/* <Footer /> */}
    </div>
  );
}

export default Home;
