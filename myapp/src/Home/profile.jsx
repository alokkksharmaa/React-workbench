import React from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
function ProfilePage() {
  const { userId } = useParams(); // URL param
  const location = useLocation(); // Access location object
  const navigate = useNavigate();
  // Parse query params
  const queryParams = new URLSearchParams(location.search);
  const showDetails = queryParams.get('showDetails');
  // Example of navigation state (optional)
  const passedData = location.state?.data;
  return (
    <div>
      <h1>Profile Page for User {userId}</h1>
      {showDetails === 'true' && <p>Showing detailed information</p>}
      {passedData && <p>Data passed via state: {passedData}</p>}
      {/* Navigation buttons */}
      <button onClick={() => navigate(-1)}>Go Back</button>
      <button onClick={() => navigate(1)}>Go Forward</button>
    </div>
  );
}
export default ProfilePage;