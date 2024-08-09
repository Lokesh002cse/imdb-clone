// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS
import './index.css';  // Import your custom CSS

// Render the App component inside the root element
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
