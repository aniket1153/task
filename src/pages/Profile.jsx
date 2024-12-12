import React from 'react';
import { useParams } from 'react-router-dom';
import profiles from '../data/profiles.json'; // Import profile data (static or from API)
import './Proflie.css'; // Import the CSS file for styling

const Profile = () => {
  const { id } = useParams(); // Get the profile ID from the URL
  const profile = profiles.find((profile) => profile.id === parseInt(id));

  if (!profile) {
    return <div>Profile not found</div>;
  }

  return (
    <div className="profile-container">
      <div className="profile-card">
        <img src={profile.image} alt={profile.name} className="profile-image" />
        <h2>{profile.name}</h2>
        <p className="profile-description">{profile.description}</p>
        <p className="profile-email"><strong>Email:</strong> {profile.email}</p>
        <p className="profile-phone"><strong>Phone:</strong> {profile.phone}</p>
        <p className="profile-address"><strong>Address:</strong> {profile.address}</p>
        <p className="profile-interests"><strong>Interests:</strong> {profile.interests.join(', ')}</p>
      </div>
    </div>
  );
};

export default Profile;
