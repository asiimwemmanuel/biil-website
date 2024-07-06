import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import './Map.css'; // Add CSS for styling

const Map = () => {
  return (
    <div className="map-card">
      <iframe
        title="Google Map"
        className="map-iframe"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345094267!2d144.9556513156166!3d-37.817326979751554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5779fd8a1cf4b6d!2sFlinders%20Street%20Station!5e0!3m2!1sen!2sau!4v1615332491376!5m2!1sen!2sau"
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Map;
