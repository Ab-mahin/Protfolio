import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Always default to dark mode on first visit
const savedTheme = localStorage.getItem('isDarkMode');
const isDarkMode = savedTheme !== null ? JSON.parse(savedTheme) : true;

// Ensure dark mode is applied immediately
document.documentElement.classList.add('dark');

if (!isDarkMode && savedTheme !== null) {
  document.documentElement.classList.remove('dark');
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
