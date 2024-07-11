import React from 'react';
import CardImg0 from '../../assets/images/card-img0.jpg';
import CardImg1 from '../../assets/images/card-img1.jpeg';
import CardImg2 from '../../assets/images/card-img2.jpeg';
import CardImg3 from '../../assets/images/card-img3.jpeg';
import CardImg4 from '../../assets/images/card-img4.jpeg';
import CardImg5 from '../../assets/images/card-img5.jpeg';
import CardImg6 from '../../assets/images/card-img6.jpeg';
import CardImg7 from '../../assets/images/card-img7.jpeg';
import CardImg8 from '../../assets/images/card-img8.jpeg';
import CardImg9 from '../../assets/images/card-img9.jpeg';
import CardImg10 from '../../assets/images/Carousel-img-2.jpeg';
import Card from '../Card/Card';

const cardData = [
  {
    id: 0,
    title: "BIIL House",
    price: 1000, // USD
    image: CardImg0,
    description: (
      <div>
        <b>Commercial & Residential</b> <br />
        1 foyer, 3 bedrooms/offices, 1 kitchen, 3 bathrooms
      </div>
    ),
    url: "https://docs.google.com/forms/d/e/1FAIpQLSeSDOjCFt9DPA2jGshK4FRBS-pfCCVfpwrt5X3PMi3VxYjCfQ/viewform"
  },
  {
    id: 1,
    title: "Kitetika Rentals",
    price: 500000,
    image: CardImg1,
    description: (
      <div>
        <b>Residential</b> <br />
        2 bedrooms, 1 bathroom
      </div>
      ),
    url: "https://docs.google.com/forms/d/e/1FAIpQLScbibvgHFiD9XLLqKOI6lzD609Gay1_j-mGiazOmRR58i9sjQ/viewform",
  },
  {
    id: 2,
    title: "Kitetika Flats",
    price: 700000,
    image: CardImg10,
    description: (
      <div>
        <b>Residential</b> <br />
        2 bedrooms, 1 bathroom
      </div>
      ),
    url: "https://docs.google.com/forms/d/e/1FAIpQLSdOCh7p3o79VTos_Bj1v00TQnTlB2jSfdxrPRmlcOmiytfwBQ/viewform"
  },
  {
    id: 3,
    title: "Janda Rentals",
    price: 500000, // 3 at 500k, one at 600k, one at 800k 
    image: CardImg2,
    description: (
      <div>
        <b>Residential</b> <br />
        2 bedrooms, 1 bathroom
      </div>
      ),
    url: "https://docs.google.com/forms/d/e/1FAIpQLScGF1cXNsPOKFBaDMftH33-vw5dmhNAH9m-FTGh-RJopMjJuA/viewform",
  },
  {
    id: 3+1,
    title: "Bulenga Flats",
    price: 500000, // one at 600k
    image: CardImg3,
    description: (
      <div>
        <b>Residential</b> <br />
        1 bedroom, 1 bathroom
      </div>
      ),
    url: "https://docs.google.com/forms/d/e/1FAIpQLSfm9qzSy6FNQNCnSrSx1p8WKZxdGpccNSRH6nzW1lG2q_NGOg/viewform",
  },
  {
    id: 4+1,
    title: "Mbalwa Rentals",
    price: 600000,
    image: CardImg4,
    description: (
      <div>
        <b>Residential</b> <br />
        2 bedrooms, 2 bathrooms
      </div>
      ),
    url: "https://docs.google.com/forms/d/e/1FAIpQLSc84YZpvjGgjBJcgpEvkaIrJpFr0TZjNl60Z167gTOezkw4MA/viewform",
  },
  {
    id: 5+1,
    title: "Zanna Rentals",
    price: 700000,
    image: CardImg5,
    description: (
      <div>
        <b>Residential</b> <br />
        2 bedrooms, 1 bathroom
      </div>
      ),
    url: "https://docs.google.com/forms/d/e/1FAIpQLSc4F8YyqeQWztgjIE5hWmztEBbhREQMKkbM348c_OAJ6gVA_g/viewform",
  },
  {
    id: 6+1,
    title: "Najjanankumbi Bungalow", // NOT 2 bedrooms
    price: 1000000,
    image: CardImg6,
    description: (
      <div>
        <b>Residential</b> <br />
        3 bedrooms, 1 bathroom
      </div>
      ),
    url: "https://docs.google.com/forms/d/e/1FAIpQLScgNxszNqGswiJZt5AhbNdSNcNEqawmYtJHeJcEXOFf4PR5KQ/viewform",
  },
  {
    id: 7+1,
    title: "Kabowa Bungalow",
    price: 1500000,
    image: CardImg7,
    description: (
      <div>
        <b>Commercial & Residential</b> <br />
        3 bedrooms, 1 bathroom
      </div>
      ),
    url: "https://docs.google.com/forms/d/e/1FAIpQLSe2mkoEKa0Dswopbtjt9fL3bS2yzzsztcig3k2rQdoXKLTgaA/viewform",
  },
  {
    id: 8+1,
    title: "Kabowa Affordable Residences",
    price: 300000,
    image: CardImg8,
    description: (
      <div>
        <b>Residential</b> <br />
        1 bedroom, 1 bathroom
      </div>
      ),
    url: "https://docs.google.com/forms/d/e/1FAIpQLSfhpOHdPwj6u6ucf5xsRlk2Lsl5NrWqM_cP7WJ_-BLw6AW4lQ/viewform",
  },
  {
    id: 9+1,
    title: "Kabowa Apartments",
    price: 1200000,
    image: CardImg9,
    description: (
      <div>
        <b>Residential</b> <br />
        2 bedrooms, 2 bathrooms
      </div>
      ),
    url: "https://docs.google.com/forms/d/e/1FAIpQLSeguM6NHb3fwzTVZ728j_6FWWRIEPpfSkjsfamLpzIUX_FPaw/viewform",
  }
];

const CardList = () => (
  <div className="cardDiv">
    {cardData.map((card) => (
      <Card
        id={card.id}
        title={card.title}
        price={card.price}
        image={card.image}
        description={card.description}
        url={card.url}
      />
    ))}
  </div>
);

export default CardList;
