import React from 'react';
import { createRoot } from 'react-dom/client'
import App from './App'; // Assuming your main App component is in App.js

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);