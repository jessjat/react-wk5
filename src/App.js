import React from "react";
import Weather from './Weather';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
      
      <Weather defaultCity="Nairobi" />

    <footer>
      This project was coded by Jacinta Musau  
    <a href="https://github.com/jessjat/react-wk5"target="_blank" rel="noopener noreferrer">  is open-sourced on GitHub </a>
       and <a href="https://endearing-tartufo-f97d02.netlify.app/" target="_blank" rel="noopener noreferrer">hosted on Netlify</a> 
    </footer>
     </div>
    </div>
  );
}


