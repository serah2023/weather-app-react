import React from "react";
import axios from "axios";

export default function WeatherSearch(props) {
  function displayWeather(response) {
    alert(` the weather in ${props.city} is ${response.data.main.temp}`);
  }

  let apiKey = "094780c710fa4efd669f0df8c3991927";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeather);

  return <h1> </h1>;
}

