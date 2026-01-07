import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';  // Make sure this path is correct
import App from './App.jsx';         // Import App only once
import './index.css';                 // This imports Tailwind styles
import { BrowserRouter } from 'react-router-dom';  // ← NEW IMPORTS FOR ROUTING

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>        {/* ← This is the magic house! */}
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);