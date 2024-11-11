import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props){
    function maximumTemperature(){
        let temperature=Math.round(props.data.temperature.maximum);
        return`${temperature}°`;
    }
    function minimumTemperature(){
        let temperature=Math.round(props.data.temperature.minimum);
        return`${temperature}°`;
    } 
    return(
    <div>
       <div className="WeatherForecast-day">{props.data.temperature.day}</div>
          <WeatherIcon code ={props.data.weather.icon}size={36} /> 
         <div className="WeatherForecast-temperatures"> 
           <span className="WeatherForecast-temperature-max">{maximumTemperature()}</span>  
           <span className="WeatherForecast-temperature-min">{minimumTemperature()}</span>
        </div> 
    </div>
    );
}