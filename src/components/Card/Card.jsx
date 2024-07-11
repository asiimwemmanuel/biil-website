import React from 'react';
import { BsBuildingsFill } from 'react-icons/bs';
import './Card.css';

function Card(props) {
  const { id, title, price, image, description, url } = props;

  const formattedPrice = id === 0 
    ? `USD ${price.toLocaleString('en-US')} / month` 
    : `UGX ${price.toLocaleString('en-US')} / month`;

  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className='no-underline'>
      <div className="card">
        <img className="card-img" src={image} alt={image} />
        <BsBuildingsFill style={{ height: '25px', width: '25px' }} />
        <div
          style={{
            paddingLeft: '10px',
            paddingRight: '10px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <h4
            style={{
              color: '#000000',
              margin: '5px',
              fontSize: '19px',
            }}
          >
            {title}
          </h4>
          <p style={{ textAlign: 'center' }}>starts at {formattedPrice}</p>
          <p style={{ textAlign: 'center' }} className="card-description">
            {description}
          </p>
        </div>
      </div>
    </a>
  );
}

export default Card;
