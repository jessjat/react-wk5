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
         temperature:response.data.temperature.current,
          wind:response.data.wind.speed,
          date:new Date(response.data.time),
          description:response.data.condition.description,
          icon:response.data.condition.icon,
          humidity:response.data.temperature.humidity,
          city:response.data.city,
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
      const apiKey= "bd79ao40tde3dec118ca46bc3e6dd55f";
      const apiUrl=`https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}`;
      console.log(apiUrl)
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