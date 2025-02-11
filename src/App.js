import React, { useState } from 'react';
import './App.css';

function App() {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  const convertToFahrenheit = (celsiusValue) => (celsiusValue * 9 / 5) + 32;
  const convertToCelsius = (fahrenheitValue) => (fahrenheitValue - 32) * 5 / 9;

  const handleCelsiusChange = (e) => {
    const value = parseFloat(e.target.value);
    setCelsius(e.target.value);
    if (!isNaN(value)) {
      setFahrenheit(convertToFahrenheit(value).toFixed(2));
    } else {
      setFahrenheit('');
    } 
  };

  const handleFahrenheitChange = (e) => {
    const value = parseFloat(e.target.value);
    setFahrenheit(e.target.value);
    if (!isNaN(value)) {
      setCelsius(convertToCelsius(value).toFixed(2));
    } else {
      setCelsius('');
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`container ${darkMode ? 'dark-mode' : ''}`}>
      <div className="switch-container">
        <label className="switch">
          <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
          <span className="slider"></span>
        </label>
        <span>{darkMode ? 'Dark Mode' : 'Light Mode'}</span>
      </div>

      <label htmlFor="celsius">Temperatura în Celsius (°C):</label>
      <input
        type="text"
        id="celsius"
        value={celsius}
        onChange={handleCelsiusChange}
        placeholder="Introduceți °C"
      />

      <label htmlFor="fahrenheit">Temperatura în Fahrenheit (°F):</label>
      <input
        type="text"
        id="fahrenheit"
        value={fahrenheit}
        onChange={handleFahrenheitChange}
        placeholder="Introduceți °F"
      />
    </div>
  );
}

export default App;
