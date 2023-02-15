import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <div className="overview">
        <h1> </h1>
        <ul>
          <li>
            {/* {props.data.date.getDay()} */}
            <FormattedDate date={props.data.date} />
          </li>

          <li className="text-capitalize">{props.data.description}</li>
        </ul>
      </div>

      <div className="row">
        <div className="col-6">
          <div className="d-flex weather-temperature">
            <img src={props.data.iconUrl} alt="img" className="mt-3" />

            <div className="mt-3">
              <strong className="temperature ps-1">
                {Math.round(props.data.temperature)}
              </strong>

              <span className="units">°C</span>
            </div>
          </div>
        </div>

        <div className="col-6 mt-4 ps-5">
          <ul>
            <li> wind: {props.data.wind} / km/h</li>

            <li>humidity: {props.data.humidity}%</li>
          </ul>
        </div>
      </div>
    </div>
  );
}


/////////////////////////

