import React from 'react';
import './MapComponent.css'; // CSS 파일 임포트

const MapComponent = () => {
  return (
    <div className="map-container">
      <img src="/seoulmap-rm.png" alt="Seoul Map" className="map-image" />
    </div>
  );
};

export default MapComponent;
