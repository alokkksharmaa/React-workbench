import React, { useState, useEffect } from 'react';
function DeleteData() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  // Fetch posts initially
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
      .then(res => res.json())
      .then(data => setPosts(data))
      .catch(err => setError(err.message));
  }, []);
  const deletePost = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (!response.ok) throw new Error('Failed to delete the post');
        // Update UI by removing the deleted post
        setPosts(posts.filter(post => post.id !== id));
        setError(null);
      })
      .catch(err => setError(err.message));
  };
  return (
    <div>
      <h2>Delete Post Example</h2>
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

export default DeleteData;