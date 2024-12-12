import React, { useState } from 'react';
import './styles/App.css';



function AdminPanel({ profiles, onSave }) {
  const [newProfile, setNewProfile] = useState({ name: '', address: '', description: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProfile({ ...newProfile, [name]: value });
  };

  const handleSave = () => {
    onSave(newProfile);
    setNewProfile({ name: '', address: '', description: '' });
  };

  return (
    <div className="admin-panel" style={{border:"1px solid black"}} >
      <h2>Admin Panel</h2>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={newProfile.name}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="address"
        placeholder="Address"
        value={newProfile.address}
        onChange={handleInputChange}
      />
      <textarea
        name="description"
        placeholder="Description"
        value={newProfile.description}
        onChange={handleInputChange}
      />
      <button onClick={handleSave}>Save Profile</button>
    </div>
  );
}

export default AdminPanel;
