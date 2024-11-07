import React,{useState} from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(){
   const[ready, setReady]=useState(false);
   const[weatherData, setWeatherData]=useState({});
   
   function handleResponse(response){
      console.log(response.data);
      setWeatherData({
         temperature:response.data.main.temp,
          wind:response.data.wind.speed,
          description:response.data.main.weather[0].description,
          iconUrl:'https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png',
          humidity:response.data.main.humidity,
          city:response.data.name
   });
      setReady(true);
   }
   if(ready){
   return(
    <div className="Weather">
        <form>
        <div className="row">
            <div className="col-9">
            <input type="search" placeholder="Enter a City..."className="form-control"autoFocus="on"/>
            </div>
            <div className="col-3">
            <input type="submit"value="search" className="btn btn-primary w-100"/>
            </div>
        </div>
        </form>
        <h1>{weatherData.city}</h1>
        <ul>
         <li>Wednesday 13:54</li> 
         <li>{weatherData.description}</li>  
        </ul>
        <div className="row mt-3">
         <div className="col-6">
            <div className="clearfix">
            <img src={weatherData.iconUrl}
            alt="mostly cloudy"
            className="float-left" />
            <div className="float-left">
            <span className="temperature">{Math.round(weatherData.temperature)}</span>
            <span className="unit">°C</span>
            </div>
            </div>
            </div>
            <div className="col-6">
               <ul>
                <li>{weatherData.humidity}%</li>
                <li>{weatherData.wind}km/h</li>
                </ul> 
                </div>   
        </div>
        </div>
   ); 
}else{
   const apiKey= "1266ad07b66517497b1acf79ea5a6a64";
   let city= "Nairobi";
   const apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
   axios.get(apiUrl).then(handleResponse);
   
   return "Loading...";
  }
}