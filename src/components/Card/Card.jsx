import React, { useState, useContext, useEffect } from 'react';
import './Card.css';
import Context from '../../Context/Context';
import { BsBuildingsFill } from 'react-icons/bs';

function Card(props) {
  const ctx = useContext(Context);
  const [hovered, setHovered] = useState(false);

  const product = {
    title: props.title,
    price: props.price,
    image: props.image.split('/').pop(),
    description: props.description,
  };

  return (
    <div className="cardd">
      <img className="card-img" src={props.image} alt={props.image} />
      <BsBuildingsFill style={{ height: '30px', width: '30px' }} />
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
          style={{ color: '#000000', marginBottom: '5px', marginLeft: '20px' }}
        >
          {props.title}
        </h4>
        <p style={{ textAlign: 'center' }}>{`${props.price.toLocaleString(
          'en-US'
        )} UGX / month`}</p>
        <p style={{ textAlign: 'center' }}>{props.description}</p>
      </div>
    </div>
  );
}

export default Card;
