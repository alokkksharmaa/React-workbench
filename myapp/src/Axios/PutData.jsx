import React, { useState, useEffect } from 'react';
function PutData() {
  const [postId, setPostId] = useState(1);
  const [title, setTitle] = useState('');
  const [updatedData, setUpdatedData] = useState(null);
  const [error, setError] = useState(null);
  // Fetch existing data to prefill input (optional)
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then(res => res.json())
      .then(data => setTitle(data.title))
      .catch(err => console.error('Error fetching post:', err));
  }, [postId]);

  const handleUpdate = (e) => {
    e.preventDefault();
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: postId,
        title: title,
        body: 'Updated post body',
        userId: 1,
      }),
    })
      .then(res => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then(data => {
        setUpdatedData(data);
        setError(null);
      })
      .catch(err => {
        setError(err.message);
        setUpdatedData(null);
      });
  };
  return (
    <div>
      <h2>Update Post (PUT Request)</h2>
      <form onSubmit={handleUpdate}>
        <label>
          Post ID to Update:
          <input type="number" value={postId}
            onChange={e => setPostId(Number(e.target.value))} min="1"max="100"/>
        </label>
        <br />
        <label>
          Title:
          <input type="text" value={title}onChange={e => setTitle(e.target.value)}
             required/>
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
export default PutData