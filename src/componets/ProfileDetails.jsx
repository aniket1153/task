import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import profiles from '../data/profiles.json'; // Assuming profiles data is here
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import './styles/ProfileDetails.css'; // Optional for component-specific styles

// Define a container style for the map component
const mapContainerStyle = {
  width: '100%',
  height: '400px',
};

function ProfileDetails() {
  const { id } = useParams(); // Get the profile ID from the URL
  const profile = profiles.find((p) => p.id === parseInt(id)); // Find the profile by ID
  const [isLoaded, setIsLoaded] = useState(false);

  const { isLoaded: mapLoaded } = useJsApiLoader({
    googleMapsApiKey: "YOUR_GOOGLE_MAPS_API_KEY", // Replace with your actual API key
  });

  useEffect(() => {
    if (mapLoaded) {
      setIsLoaded(true);
    }
  }, [mapLoaded]);

  if (!profile) {
    return <div className="profile-details">Profile not found!</div>;
  }

  return (
    <div className="profile-details">
      <div className="details-header">
        <img src={profile.image} alt={profile.name} className="profile-image" />
        <div className="profile-info">
          <h2>{profile.name}</h2>
          <p>{profile.description}</p>
        </div>
      </div>
      
      <div className="details-body">
        <h3>Contact Information</h3>
        <p><strong>Email:</strong> {profile.email}</p>
        <p><strong>Phone:</strong> {profile.phone}</p>
        
        <h3>Address</h3>
        <p>{profile.address}</p>
        
        {isLoaded && (
          <div className="map-container">
            <h3>Location on the Map</h3>
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              center={{ lat: 37.7749, lng: -122.4194 }} // Example: San Francisco coordinates
              zoom={12}
            >
              <Marker position={{ lat: 37.7749, lng: -122.4194 }} /> {/* Set marker coordinates based on the profile */}
            </GoogleMap>
          </div>
        )}
        
        <h3>Interests</h3>
        <ul>
          {profile.interests.map((interest, index) => (
            <li key={index}>{interest}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProfileDetails;
