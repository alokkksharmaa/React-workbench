import React, { useState, useEffect } from 'react';
import axios from 'axios';
function AxiosPutData() {
  const [postId, setPostId] = useState(1);
  const [title, setTitle] = useState('');
  const [updatedData, setUpdatedData] = useState(null);
  const [error, setError] = useState(null);

  // Fetch existing post data to prefill input (optional)
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then(response => setTitle(response.data.title))
      .catch(err => console.error('Error fetching post:', err));
  }, [postId]);

  const handleUpdate = (e) => {
    e.preventDefault();
    axios.put(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
      id: postId,
      title: title,
      body: 'Updated post body',
      userId: 1,
    })
      .then(response => {
        setUpdatedData(response.data);
        setError(null);
      })
      .catch(err => {
        setError(err.message);
        setUpdatedData(null);
      });
  };

  return (
    <div>
      <h2>Update Post (Axios PUT Request)</h2>
      <form onSubmit={handleUpdate}>
        <label>
          Post ID:
          <input
            type="number"
            value={postId}
            onChange={e => setPostId(Number(e.target.value))}
            min="1"
            max="100"
          />
        </label>
        <br />
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Update Post</button>
      </form>

      {updatedData && (
        <div>
          <h3>Post Updated Successfully:</h3>
          <p>ID: {updatedData.id}</p>
          <p>Title: {updatedData.title}</p>
        </div>
      )}

      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
    </div>
  );
}
export default AxiosPutData;