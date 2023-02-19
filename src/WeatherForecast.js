import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    //daily
    console.log(response.data);
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    console.log(forecast);
    return (
      <div className="WeatherForecast">
        <div className="row">

{forecast.map(function(dailyForecast , index)  {

  if(index<5){

return (
  <div className="col" key={index}>
    <WeatherForecastDay data={dailyForecast} />
  </div>
);
  }


})}


       

            
        </div>
      </div>
    );
  } else {
    //just coords
    console.log(props);

    let apiKey = "5cf053ofb32b9t3e1a2bc6055da407d4";

    let lat = props.coords.latitude;
    let lon = props.coords.longitude;

    // let latitude = 40.7127281;
    // let longitude = -74.0060152;

    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
