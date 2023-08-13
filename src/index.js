import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { MovieContext, MovieProvider } from './contexts/MovieContext';
export { MovieContext }
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <MovieProvider>
        <App />
      </MovieProvider>
    </Router>
  </React.StrictMode>
);

