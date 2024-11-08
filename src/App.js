import React from "react";
import Weather from './Weather';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
      
      <Weather defaultCity="Nairobi" />

    <footer>
      This project was coded by Jacinta Musau and 
    <a href="https://github.com/jessjat/react-wk5"target="_blank" rel="noopener noreferrer">  is open-sourced on GitHub</a>
    </footer>
     </div>
    </div>
  );
}


