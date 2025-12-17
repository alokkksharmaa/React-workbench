import React from 'react';
import { useNavigate } from 'react-router-dom';
function AboutPage() {
  const navigate = useNavigate();
  const goToProfileWithState = () => {
    navigate('/profile/3', { state: { data: 'Passed via state!' } });
  };
  return (
    <div>
      <h1>About Page</h1>
      <button onClick={goToProfileWithState}>Go to Profile 3 with State</button>
    </div>
  );
}

export default AboutPage;