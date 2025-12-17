import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        {/* Route with URL Param */}
        <Route path="/profile/:userId" element={<ProfilePage />} />
      </Routes>
  
  );
}
export default App;