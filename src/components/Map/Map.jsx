import L from 'leaflet';
import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import './Map.css'; // Add CSS for styling

const Map = () => {
  return (
    <div className="map-card">
      <iframe
          title="Google Map"
          className="map-iframe"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.756543088486!2d32.56559517547489!3d0.31884229967802646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbbd2ef435ddf%3A0x76e35f194cca43e6!2sBIIL%20House!5e0!3m2!1sen!2sug!4v1720526862067!5m2!1sen!2sug" 
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
