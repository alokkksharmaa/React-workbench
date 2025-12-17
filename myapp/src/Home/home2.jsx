import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
function HomePage() {
  const navigate = useNavigate();
  // Navigation using useNavigate programmatically
  const goToAbout = () => {
    navigate('/about');
  };
  // Navigation with query params
  const goToProfileWithQuery = () => {
    navigate('/profile/3?showDetails=true');
  };
  return (
    <div>
      <h1>Home Page</h1>
      {/* Link component for navigation */}
      <Link to="/about">Go to About</Link><br />
      <button onClick={goToAbout}>Go to About (programmatic)</button><br />
      <button onClick={goToProfileWithQuery}>Go to Profile 3 with Query</button>
    </div>
  );
}

export default HomePage;