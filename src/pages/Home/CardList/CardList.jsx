import React from 'react';
import CardImg0 from '../../../assets/images/card-img0.jpg';
import CardImg1 from '../../../assets/images/card-img1.jpeg';
import CardImg2 from '../../../assets/images/card-img2.jpeg';
import CardImg3 from '../../../assets/images/card-img3.jpeg';
import CardImg4 from '../../../assets/images/card-img4.jpeg';
import CardImg5 from '../../../assets/images/card-img5.jpeg';
import CardImg6 from '../../../assets/images/card-img6.jpeg';
import CardImg7 from '../../../assets/images/card-img7.jpeg';
import CardImg8 from '../../../assets/images/card-img8.jpeg';
import CardImg9 from '../../../assets/images/card-img9.jpeg';
import Card from '../../../components/Card/Card';

const cardData = [
  {
    id: 0,
    title: "BIIL House",
    price: 1000, // USD
    image: CardImg0,
    description: (
      <div>
        <b>Commercial & Residential</b> <br />
        3 offices, 1 kitchen, 3 bathrooms
      </div>
    ),
    url: "https://docs.google.com/forms/d/e/1FAIpQLSeSDOjCFt9DPA2jGshK4FRBS-pfCCVfpwrt5X3PMi3VxYjCfQ/viewform"
  },
  {
    id: 1,
    title: "Kitetika Bungalows",
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
    title: "Janda Bungalows",
    price: 800000,
    image: CardImg2,
    description: (
      <div>
        <b>Residential</b> <br />
        2 bedrooms, 2 bathrooms
      </div>
      ),
    url: "https://docs.google.com/forms/d/e/1FAIpQLScGF1cXNsPOKFBaDMftH33-vw5dmhNAH9m-FTGh-RJopMjJuA/viewform",
  },
  {
    id: 3,
    title: "Bulenga Flats",
    price: 500000,
    image: CardImg3,
    description: (
      <div>
        <b>Residential</b> <br />
        2 bedrooms, 2 bathrooms
      </div>
      ),
    url: "https://docs.google.com/forms/d/e/1FAIpQLSfm9qzSy6FNQNCnSrSx1p8WKZxdGpccNSRH6nzW1lG2q_NGOg/viewform",
  },
  {
    id: 4,
    title: "Mbalwa Bungalows",
    price: 600000,
    image: CardImg4,
    description: (
      <div>
        <b>Residential</b> <br />
        2 bedrooms, 1 bathroom
      </div>
      ),
    url: "https://docs.google.com/forms/d/e/1FAIpQLSc84YZpvjGgjBJcgpEvkaIrJpFr0TZjNl60Z167gTOezkw4MA/viewform",
  },
  {
    id: 5,
    title: "Zanna Bungalows",
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
    id: 6,
    title: "Najjanankumbi Bungalow",
    price: 1000000,
    image: CardImg6,
    description: (
      <div>
        <b>Residential</b> <br />
        2 bedrooms, 1 bathroom
      </div>
      ),
    url: "https://docs.google.com/forms/d/e/1FAIpQLScgNxszNqGswiJZt5AhbNdSNcNEqawmYtJHeJcEXOFf4PR5KQ/viewform",
  },
  {
    id: 7,
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
    id: 8,
    title: "Kabowa micro-residences",
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
    id: 9,
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
