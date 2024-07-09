import React from 'react';
import CardImg1 from '../../../assets/card-img1.jpeg';
import CardImg2 from '../../../assets/card-img2.jpeg';
import CardImg3 from '../../../assets/card-img3.jpeg';
import CardImg4 from '../../../assets/card-img4.jpeg';
import CardImg5 from '../../../assets/card-img5.jpeg';
import CardImg6 from '../../../assets/card-img6.jpeg';
import CardImg7 from '../../../assets/card-img7.jpeg';
import CardImg8 from '../../../assets/card-img8.jpeg';
import CardImg9 from '../../../assets/card-img9.jpeg';
import Card from '../../../components/Card/Card';

const cardData = [
  {
    title: "Kitetika Bungalows",
    price: 500000,
    image: CardImg1,
    description: "2 bedrooms, 1 bathroom",
    url: "https://docs.google.com/forms/d/e/1FAIpQLScbibvgHFiD9XLLqKOI6lzD609Gay1_j-mGiazOmRR58i9sjQ/viewform",
  },
  {
    title: "Janda Bungalows",
    price: 800000,
    image: CardImg2,
    description: "2 bedrooms, 2 bathrooms",
    url: "https://docs.google.com/forms/d/e/1FAIpQLScGF1cXNsPOKFBaDMftH33-vw5dmhNAH9m-FTGh-RJopMjJuA/viewform",
  },
  {
    title: "Bulenga Flats",
    price: 500000,
    image: CardImg3,
    description: "2 bedrooms, 2 bathrooms",
    url: "https://docs.google.com/forms/d/e/1FAIpQLSfm9qzSy6FNQNCnSrSx1p8WKZxdGpccNSRH6nzW1lG2q_NGOg/viewform",
  },
  {
    title: "Mbalwa Bungalows",
    price: 600000,
    image: CardImg4,
    description: "2 bedrooms, 1 bathroom",
    url: "https://docs.google.com/forms/d/e/1FAIpQLSc84YZpvjGgjBJcgpEvkaIrJpFr0TZjNl60Z167gTOezkw4MA/viewform",
  },
  {
    title: "Zanna Bungalows",
    price: 700000,
    image: CardImg5,
    description: "2 bedrooms, 1 bathroom",
    url: "https://docs.google.com/forms/d/e/1FAIpQLSc4F8YyqeQWztgjIE5hWmztEBbhREQMKkbM348c_OAJ6gVA_g/viewform",
  },
  {
    title: "Najjanankumbi Bungalow",
    price: 1000000,
    image: CardImg6,
    description: "2 bedrooms, 1 bathroom",
    url: "https://docs.google.com/forms/d/e/1FAIpQLScgNxszNqGswiJZt5AhbNdSNcNEqawmYtJHeJcEXOFf4PR5KQ/viewform",
  },
  {
    title: "Kabowa Bungalow",
    price: 1500000,
    image: CardImg7,
    description: "3 bedrooms, 1 bathroom",
    url: "https://docs.google.com/forms/d/e/1FAIpQLSe2mkoEKa0Dswopbtjt9fL3bS2yzzsztcig3k2rQdoXKLTgaA/viewform",
  },
  {
    title: "Kabowa micro-residences",
    price: 300000,
    image: CardImg8,
    description: "1 bedroom, 1 bathroom",
    url: "https://docs.google.com/forms/d/e/1FAIpQLSfhpOHdPwj6u6ucf5xsRlk2Lsl5NrWqM_cP7WJ_-BLw6AW4lQ/viewform",
  },
  {
    title: "Kabowa Apartments",
    price: 1200000,
    image: CardImg9,
    description: "2 bedrooms, 2 bathrooms",
    url: "https://docs.google.com/forms/d/e/1FAIpQLSeguM6NHb3fwzTVZ728j_6FWWRIEPpfSkjsfamLpzIUX_FPaw/viewform",
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
        url={card.url}
      />
    ))}
  </div>
);

export default CardList;
