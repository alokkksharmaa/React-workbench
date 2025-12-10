import React, { useState } from 'react';
function PostData() {
  const [title, setTitle] = useState('');
  const [responseData, setResponseData] = useState(null);
  const [error, setError] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform POST request to add a new post
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: title,
        body: 'Example post body',
        userId: 1,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setResponseData(data);
        setError(null);
        setTitle('');
      })
      .catch((err) => {
        setError(err.message);
        setResponseData(null);
      });
  };
  return (
    <div>
      <h2>Add a New Post</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter post title"
          required
        />
        <button type="submit">Add Post</button>
      </form>
      {responseData && (
        <div>
          <h3>Post Added Successfully:</h3>
          <p>ID: {responseData.id}</p>
          <p>Title: {responseData.title}</p>
        </div>
      )}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
    </div>
  );
}
export default PostData