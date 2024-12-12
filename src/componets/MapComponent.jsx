import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css'; // Add Leaflet CSS

const containerStyle = {
  width: '100%',
  height: '400px',
};

function MapComponent({ address }) {
  const [coordinates, setCoordinates] = useState({
    lat: 37.7749, // Default to San Francisco
    lng: -122.4194,
  });

  return (
    <MapContainer
      center={coordinates}
      zoom={12}
      style={containerStyle}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={coordinates}>
        <Popup>{address || "Location"}</Popup>
      </Marker>
    </MapContainer>
  );
}

export default MapComponent;
