import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import ProfileCard from '../componets/ProfileCard'; // Ensure the correct path to ProfileCard component
import MapComponent from '../componets/MapComponent'; // Ensure the correct path to MapComponent component
import profiles from '../data/profiles.json'; // Static data (Ensure you have this file)
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function Home() {
  const [selectedAddress, setSelectedAddress] = useState(null);

  return (
    <>
    <div style={{display:"flex",justifyContent:"space-between"}}>
    <div><p style={{fontSize:"24px",color:"black"}}>employee profile</p></div>
    <div>
    <Link to="/admin">
        <button style={{ padding: '10px 20px', margin: '20px', backgroundColor: '#007BFF', color: 'white', border: 'none', borderRadius: '5px' }}>
          Admin
        </button>
      </Link>
    </div>
   </div>

    <div className="home">
  
   
      <div className="profile-list" style={{ display: "flex", justifyContent: "space-between" }}>
 
        {profiles.map((profile) => (
          <ProfileCard
            key={profile.id}
            profile={profile}
            onSummaryClick={() => setSelectedAddress(profile.address)} // Update the address when clicked
          />
        ))}
      </div>
      
      {/* Show MapComponent if an address is selected */}
      {selectedAddress && (
        <div className="map-container">
          <MapComponent address={selectedAddress} />
        </div>
      )}
    </div>
    </>
  );
}

export default Home;
