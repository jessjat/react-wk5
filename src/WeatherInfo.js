import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";



export default function WeatherInfo(props){
    return(
        <div className="WeatherInfo">
           <h1>{props.data.city}</h1>
        <ul>
         <li>
         <FormattedDate date={props.data.date} />
         </li>
         <li className="text-capitalize">{props.dat.description}</li>  
        </ul>
        <div className="row mt-3">
         <div className="col-6">
            <div className="clearfix">
            <WeatherIcon code={props.data.icon} alt={props.data.description}
            className="float-left"/>  
            <div className="float-left">
             <WeatherTemperature celcius={props.data.icon}/>   
            
            </div>
            </div>
            </div>
            <div className="col-6">
               <ul>
                <li>{props.data.humidity}%</li>
                <li>{props.data.wind}km/h</li>
                </ul> 
                </div>   
        </div>
        </div> 
    );
}