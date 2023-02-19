import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    //daily
    console.log(response.data);
  }

  //just coords
  console.log(props);

  let apiKey = "5cf053ofb32b9t3e1a2bc6055da407d4";

  let lat = props.coords.latitude;
  let lon = props.coords.longitude;

  // let latitude = 40.7127281;
  // let longitude = -74.0060152;

  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${apiKey}`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day"> thu </div>
          <WeatherIcon code="clear-sky-day" size={36} />
          <div className="WeatherForecast-temperature">
            <span className="WeatherForecast-temperature-max">19° </span>
            <span className="WeatherForecast-temperature-min">10° </span>
          </div>
        </div>

        {/* <div className="col">
          <div className="WeatherForecast-day"> thu </div>
          <WeatherIcon code="clear-sky-day" size={36} />
          <div className="WeatherForecast-temperature">
            <span className="WeatherForecast-temperature-max">19° </span>
            <span className="WeatherForecast-temperature-min">10° </span>
          </div>
        </div>

        <div className="col">
          <div className="WeatherForecast-day"> thu </div>
          <WeatherIcon code="clear-sky-day" size={36} />
          <div className="WeatherForecast-temperature">
            <span className="WeatherForecast-temperature-max">19° </span>
            <span className="WeatherForecast-temperature-min">10° </span>
          </div>
        </div>

        <div className="col">
          <div className="WeatherForecast-day"> thu </div>
          <WeatherIcon code="clear-sky-day" size={36} />
          <div className="WeatherForecast-temperature">
            <span className="WeatherForecast-temperature-max">19° </span>
            <span className="WeatherForecast-temperature-min">10° </span>
          </div>
        </div>

        <div className="col">
          <div className="WeatherForecast-day"> thu </div>
          <WeatherIcon code="clear-sky-day" size={36} />
          <div className="WeatherForecast-temperature">
            <span className="WeatherForecast-temperature-max">19° </span>
            <span className="WeatherForecast-temperature-min">10° </span>
          </div>
        </div> */}
      </div>
    </div>
  );
}