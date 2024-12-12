import React from 'react';

// import './Profile_card.css';

function ProfileCard({ profile, onSummaryClick }) {
  return (
<>
<div style={{width:'100%'}}>
        <div className="profile-card">
          <img src={profile.image} alt={profile.name} />
          <h3>{profile.name}</h3>
          <p>{profile.description}</p>
          <button onClick={onSummaryClick}>Summary</button>
        </div>
    </div>

</>
  );
}

export default ProfileCard;
