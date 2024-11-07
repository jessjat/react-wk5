import React from "react";
import Weather from './Weather';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <h1>Weather App</h1>
      <Weather default city="Nairobi"/>

    <footer>
      This project was coded by Jacinta Musau and 
    <a href="https://github.com/jessjat/react-wk5"target="_blank" rel="noreferrer">  is open-sourced on GitHub</a>
    </footer>
     </div>
    </div>
  );
}


