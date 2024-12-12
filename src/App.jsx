import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Admin from './pages/Admin';
import Profile from './pages/Profile';
import EditProfile from './pages/EditProfile'; // Import the EditProfile component

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Route */}
        <Route path="/" element={<Home />} />
        
        {/* Admin Route */}
        <Route path="/admin" element={<Admin />} />
        
        {/* Profile Route with Dynamic ID */}
        <Route path="/profile/:id" element={<Profile />} />
        
        {/* Edit Profile Route */}
        <Route path="/edit-profile/:id" element={<EditProfile />} /> {/* Route to edit a profile */}
      </Routes>
    </Router>
  );
}

export default App;
