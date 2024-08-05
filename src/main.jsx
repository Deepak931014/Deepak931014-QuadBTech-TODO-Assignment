import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'; // Ensure this file contains your Tailwind imports
import { ThemeProvider } from './context/ThemeContext'; // Path to ThemeContext.jsx

ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
