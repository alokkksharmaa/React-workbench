import React, { useState, useEffect } from 'react';
function FetchData() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(jsonData => {
        setData(jsonData);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []); // Empty dependency array means this runs once after mounting
  if (loading) return <p>Loading data...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <div>
      <h2>Fetched Posts</h2>
      <ul>
        {data.map(post => (
          <li key={post.id}>
            <p>User Id:{post.userId}</p>
            <p>Id:{post.id}</p>
            <p>Title:{post.title}</p>
            <p>Body:{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default FetchData;