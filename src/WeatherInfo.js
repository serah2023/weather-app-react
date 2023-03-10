import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1 className="font-weight-bold">{props.data.city}</h1>
      <div className="overview">
        <h1> </h1>
        <ul>
          <li>
            {/* {props.data.date.getDay()} */}
            <FormattedDate date={props.data.date} />
          </li>

          <li className="text-capitalize mb-3">{props.data.description}</li>
        </ul>
      </div>

      <div className="row">
        <div className="col-6">
          <div className="d-flex weather-temperature ">
            <WeatherIcon code={props.data.icon} size={52} />

            {/* <img src={props.data.iconUrl} alt="img" className="mt-3" /> */}

            <div className="mt-3">
              <WeatherTemperature celsius={props.data.temperature} />

              {/* <strong className="temperature ps-1">
                {Math.round(props.data.temperature)}
              </strong>

              <span className="units">°C</span> */}
            </div>
          </div>
        </div>

        <div className="col-6 mt-4 ps-5">
          <ul className="windy">
            <li className="fs-5 fw-light mb-2">
              {" "}
              wind: <strong> {props.data.wind}/ km/h </strong>
            </li>

            <li className="fs-5">
              humidity: <strong> {props.data.humidity}% </strong>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}




