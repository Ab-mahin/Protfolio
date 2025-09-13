import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Set theme from localStorage or default to dark mode
const savedTheme = localStorage.getItem('isDarkMode');
const isDarkMode = savedTheme !== null ? JSON.parse(savedTheme) : true;

if (isDarkMode) {
  document.documentElement.classList.add('dark');
} else {
  document.documentElement.classList.remove('dark');
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
