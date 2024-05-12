import React, { useEffect } from 'react';
import './Home.css';
import Header from '../../components/Header/Header';
import Card from '../../components/Card/Card';
import Pic1 from '/src/assets/image.png';
import Pic3 from '/src/assets/image3.png';
import Pic2 from '/src/assets/image2.png';
import Footer from '../../components/Footer/footer';
import { Parallax } from 'react-scroll-parallax';
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
        // backgroundColor: 'black',
        color: 'white',
        width: '100vw',
        position: 'absolute',
        height: '100vh',
        top: 0,
        left: 0,
      }}
    >
      <Header />
      <Parallax translateY={[-40, 40]}>
        <div className="models-pic">
          <div className="text-block-1">
            <h1
              style={{
                margin: 0,
                fontSize: '40px',
                fontFamily: '"Crimson Text", serif',
              }}
            >
              BIIL <p className="logo-word">House.</p>
            </h1>
            <p
              style={{
                maxWidth: '350px',
                lineHeight: '40px',
                margin: '20px',
                fontWeight: 650,
                fontSize: '18px',
              }}
              className="text-block-1-text"
            >
              Welcome to BIIL House, where luxury meets convenience. Comfort and
              style in every corner of your new home.
            </p>
          </div>
        </div>
      </Parallax>

      <Parallax translateY={[0, -200]}>
        <div className="models-pic2">
          <div className="text-block-2">
            <p
              style={{
                maxWidth: '350px',
                lineHeight: '40px',
                margin: '20px',
                fontWeight: 650,
                fontSize: '18px',
              }}
            >
              Discover the epitome of urban living at BIIL House. Unravel a
              lifestyle that exceeds expectations. Welcome home to luxury
              redefined.
            </p>
          </div>
        </div>
      </Parallax>

      <Parallax translateY={[-50, -700]}>
        <div className="models-pic3">
          <div className="text-block-3">
            <p
              style={{
                maxWidth: '350px',
                lineHeight: '40px',
                margin: '20px',
                fontWeight: 650,
                fontSize: '18px',
              }}
            >
              Experience unparalleled comfort and style in the heart of the
              city. Welcome home to{' '}
              <span
                style={{
                  margin: 0,
                  fontFamily: '"Crimson Text", serif',
                  fontSize: '25px',
                }}
              >
                BIIL{' '}
                <span className="logo-word" style={{ margin: '0px' }}>
                  House.
                </span>
              </span>
            </p>
          </div>
        </div>
      </Parallax>

      {/* <ScrollDownButton /> */}
      {/* <img src={Models} alt="Models-Pic" className="models-pic" /> */}
      <div style={{ marginTop: '-1000px' }}>
        {' '}
        <div
          style={{
            textAlign: 'center',
            padding: '20px',
            // width: '100%',
          }}
        >
          <h2 style={{ fontSize: '35px' }}>Explore Our Newest Listings</h2>
          <p style={{ fontSize: '20px' }}>
            Find your ideal living space in style. <br />
            <br />
            Click the images to add them to your favorites
          </p>
        </div>
        <div className="cardDiv">
          <Card
            title="Overthink"
            image={Pic1}
            hoverPic={Pic1}
            para={
              "Don't Over Think It. Stay stylish, keep your look effortlessly cool and your mind at ease."
            }
            price={38000}
          />
          <Card
            title="Pic2"
            image={Pic2}
            hoverPic={Pic2}
            // hoverPic={Pic2}
            // image={ModelsCard3}
            para={
              'Rock the edge! Our fashion screams rebellion. Break the mold, flaunt your style.'
            }
            price={38000}
          />
          <Card
            title="Pic3"
            image={Pic3}
            hoverPic={Pic3}
            // image={ModelsCard1}
            para={
              "Pic3. A delicate thread in life's tapestry. Weaving dreams into reality with timeless grace."
            }
            price={38000}
          />
        </div>
      </div>
      {/* <button style={{ backgroundColor: 'green', borderRadius: '25px' }}> */}
      {/* </button> */}
      <Footer />
    </div>
  );
}

export default Home;
