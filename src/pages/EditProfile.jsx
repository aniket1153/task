import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import profiles from '../data/profiles.json'; // Import your profiles data (or fetch it from API)\


const EditProfile = () => {
  const { id } = useParams(); // Get the profile ID from URL
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    // Find the profile using the ID
    const profileData = profiles.find(p => p.id === parseInt(id));
    if (profileData) {
      setProfile(profileData);
    } else {
      console.error("Profile not found");
    }
  }, [id]);

  // Handle form submission (In a real app, this would update the profile in a database)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Profile updated:", profile);
    // After submission, redirect to the profile page
    navigate(`/profile/${profile.id}`);
  };


  if (!profile) return <div>Loading...</div>;

  return (
   <>
   
   <div style={{display:"flex",justifyContent:"center" ,gap:"10px"}} >
       
   <div style={{    border:"1px solid black",backgroundColor:"black", color:"white",marginLeft:"620px"}}>
      <h2>Edit Profile</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            value={profile.name}
            onChange={(e) => setProfile({ ...profile, name: e.target.value })}
          />
        </div>
        <div>
          <label>Description</label>
          <input
            type="text"
            value={profile.description}
            onChange={(e) => setProfile({ ...profile, description: e.target.value })}
          />
        </div>
        <div>
          <label>Address</label>
          <input
            type="text"
            value={profile.address}
            onChange={(e) => setProfile({ ...profile, address: e.target.value })}
          />
        </div>
       
      </form>
      <button sty type="submit">Save Changes</button>
    </div>
    
 <div></div>

    </div></>
  );
};

export default EditProfile;
