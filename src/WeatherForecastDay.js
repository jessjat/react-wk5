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
    function day(){
        let date =new Date(props.data.temperature.day*1000);
        let day=date.getDay();
        let days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
        return days[day];
    }
    return(
    <div>
       <div className="WeatherForecast-day">{day()}</div>
          <WeatherIcon code ={props.data.condition.icon_url}size={36} /> 
         <div className="WeatherForecast-temperatures"> 
           <span className="WeatherForecast-temperature-max">{maximumTemperature()}</span>  
           <span className="WeatherForecast-temperature-min">{minimumTemperature()}</span>
        </div> 
    </div>
    );
}