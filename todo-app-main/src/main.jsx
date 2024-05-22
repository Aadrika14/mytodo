import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.jsx';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';

createRoot(document.getElementById('root')).render( // Use createRoot instead of ReactDOM.render
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);