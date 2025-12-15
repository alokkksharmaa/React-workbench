import React, { useState, useEffect } from 'react';
import axios from 'axios';AxiosDeleteData
function AxiosDeleteData() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  // Fetch initial posts
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5')
      .then(response => setPosts(response.data))
      .catch(err => setError(err.message));
  }, []);
  const deletePost = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(() => {
        setPosts(posts.filter(post => post.id !== id));
        setError(null);
      })
      .catch(err => setError(err.message));
  };
  return (
    <div>
      <h2>Delete Posts (Axios DELETE)</h2>
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <button onClick={() => deletePost(post.id)} style={{ marginLeft: '10px' }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default AxiosDeleteData;