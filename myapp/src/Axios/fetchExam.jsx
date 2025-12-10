import React, { useState, useEffect } from 'react';
function FetchExam() {
  const [data, setData] = useState([]);
  const [input, setInput] = useState('');
  const [editId, setEditId] = useState(null);
  // GET Request
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(json => setData(json.slice(0, 5))) // limit to 5 items for demo
      .catch(err => console.error('GET Error:', err));
  }, []);

  // POST Request
  const addItem = () => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=8', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ title: input, body: 'Sample body', userId: 1 }),
    })
      .then(res => res.json())
      .then(newItem => setData([newItem, ...data]))
      .catch(err => console.error('POST Error:', err));
  };

  // PUT Request
  const updateItem = id => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ title: input, body: 'Updated body', userId: 1 }),
    })
      .then(res => res.json())
      .then(updatedItem => {
        setData(data.map(item => (item.id === id ? updatedItem : item)));
        setEditId(null);
        setInput('');
      })
      .catch(err => console.error('PUT Error:', err));
  };

  // DELETE Request
  const deleteItem = id => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'DELETE',
    })
      .then(() => setData(data.filter(item => item.id !== id)))
      .catch(err => console.error('DELETE Error:', err));
  };
  return (
    <div>
      <h2>Fetch API CRUD Example</h2>
      <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Enter title"
      />
      {editId ? (
        <button onClick={() => updateItem(editId)}>Update</button>
      ) : (
        <button onClick={addItem}>Add</button>
      )}
      <ul>
        {data.map(post => (
          <li key={post.userId}>
            <p>Id:{post.id}</p>
            <p>User id:{post.userId}</p>
            <p>Title:{post.title}</p>
            <button onClick={() => { setEditId(post.id); setInput(post.title); }}>Edit</button>
            <button onClick={() => deleteItem(post.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FetchExam;