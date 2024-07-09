import React from 'react';
import CardImg1 from '../../../assets/card-img1.jpeg'; // Adjust the path based on where images are located
import CardImg2 from '../../../assets/card-img2.jpeg';
import CardImg3 from '../../../assets/card-img3.jpeg';
import CardImg4 from '../../../assets/card-img4.jpeg';
import CardImg5 from '../../../assets/card-img5.jpeg';
import CardImg6 from '../../../assets/card-img6.jpeg';
import CardImg7 from '../../../assets/card-img7.jpeg';
import CardImg8 from '../../../assets/card-img8.jpeg';
import CardImg9 from '../../../assets/card-img9.jpeg';
import Card from '../../../components/Card/Card'; // Adjust the path based on where Card is located

const cardData = [
  {
    title: "Kitetika Bungalows",
    price: 500000,
    image: CardImg1,
    description: "2 bedrooms, 1 bathroom"
  },
  {
    title: "Janda Bungalows",
    price: 800000,
    image: CardImg2,
    description: "2 bedrooms, 2 bathrooms"
  },
  {
    title: "Bulenga Flats",
    price: 500000,
    image: CardImg3,
    description: "2 bedrooms, 2 bathrooms"
  },
  {
    title: "Mbalwa Bungalows",
    price: 600000,
    image: CardImg4,
    description: "2 bedrooms, 1 bathroom"
  },
  {
    title: "Zanna Bungalows",
    price: 700000,
    image: CardImg5,
    description: "2 bedrooms, 1 bathroom"
  },
  {
    title: "Najjanankumbi Bungalow",
    price: 1000000,
    image: CardImg6,
    description: "2 bedrooms, 1 bathroom"
  },
  {
    title: "Kabowa Bungalow",
    price: 1500000,
    image: CardImg7,
    description: "3 bedrooms, 1 bathroom"
  },
  {
    title: "Kabowa micro-residences",
    price: 300000,
    image: CardImg8,
    description: "1 bedroom, 1 bathroom"
  },
  {
    title: "Kabowa Apartments",
    price: 1200000,
    image: CardImg9,
    description: "2 bedrooms, 2 bathrooms"
  }
];

const CardList = () => (
  <div className="cardDiv">
    {cardData.map((card, index) => (
      <Card
        key={index}
        title={card.title}
        price={card.price}
        image={card.image}
        description={card.description}
      />
    ))}
  </div>
);

export default CardList;
