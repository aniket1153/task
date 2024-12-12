import React, { useState } from 'react'; // Add useState import
import { useNavigate } from 'react-router-dom'; // Add useNavigate import
import profiles from '../data/profiles.json'; // Ensure you import your profiles data
import './admin.css'; // Assuming you have a CSS file for styling (Optional)

const Admin = () => {
  const navigate = useNavigate(); // Use the useNavigate hook
  const [profileList, setProfileList] = useState(profiles); // Initialize profileList with profiles

  const handleEdit = (id) => {
    navigate(`/edit-profile/${id}`); // Navigate to the edit profile page
  };

  const handleDelete = (id) => {
    // Filter out the profile with the given id and update the state
    setProfileList(profileList.filter(profile => profile.id !== id));
  };

  return (
    <div className="admin-container" >
      <h2>Admin Panel</h2>
      <div className="profile-list" style={{display:"flex",justifyContent:"space-between"}}>
        {profileList.map((profile) => (
          <div key={profile.id} className="profile-card" style={{border:'1px solid black'}}>
            <img src={profile.image} alt={profile.name} />
            <h3>{profile.name}</h3>
            <p>{profile.description}</p>
            <button onClick={() => handleEdit(profile.id)}>Edit</button>
            <button onClick={() => handleDelete(profile.id)}>Delete</button> {/* Delete button */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admin;
