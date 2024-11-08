import React,{useState} from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";


export default function Weather(props){
   const[weatherData, setWeatherData]=useState({ready:false});
   const[city, setCity]=useState(props.defaultCity);

   function handleResponse(response){
      setWeatherData({
         ready: true,
         temperature:response.data.main.temp,
          wind:response.data.wind.speed,
          date:new Date(response.data.dt*1000),
          description:response.data.main.weather[0].description,
          icon:response.data.weather[0].icon,
          humidity:response.data.main.humidity,
          city:response.data.name,
            });
   
   }
   function handleSubmit(event){
      event.preventDefault();
      search();
   }
   function handleCityChange(event){
      setCity(event.target.value);
      
      }

   function search(){
      const apiKey= "3ob9403f647925649063e2b120atb379";
      const apiUrl=`https://api.shecodes.io/weather/v1/current?=${props.defaultCity}&appid=${apiKey}&units=metric`;
      axios.get(apiUrl).then(handleResponse)

   }   

   if(weatherData.ready){
   return(
    <div className="Weather">
        <form onSubmit={handleSubmit}>
        <div className="row">
            <div className="col-9">
            <input type="search" placeholder="Enter a City..."className="form-control"autoFocus="on"onChange={handleCityChange}/>
            </div>
            <div className="col-3">
            <input type="submit"value="search" className="btn btn-primary w-100"/>
            </div>
        </div>
        </form>
        <WeatherInfo data={weatherData}/>
       </div>
   ); 
}else{
  search();
   return "Loading...";
  }
}