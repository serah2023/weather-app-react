import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import "./WeatherSearch.css";
import axios from "axios";

// import ReactAnimatedWeather from "react-animated-weather";


export default function WeatherSearch(props)
{


let [weatherData, setWeatherData]=useState({ready:false })

  function handleResponse(response){
    // console.log(response.data)

      setWeatherData({
        ready: true,
        temperature: response.data.temperature.current,
        humidity: response.data.temperature.humidity,
        date: new Date(response.data.time *1000),
        description: response.data.condition.description,
        iconUrl: "https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png",
        wind: response.data.wind.speed,
        city: response.data.city,
      });
  }


   if (weatherData.ready)
   {
     return (
       <div className="WeatherSearch">
         <form>
           <div className="row">
             <div className="col-9">
               <input
                 type="search"
                 placeholder="Enter a city"
                 autoFocus="on"
                 className="form-control"
               />
             </div>

             <div className="col-3">
               <input
                 type="submit"
                 value="search"
                 className="btn btn-primary w-100"
               />
             </div>
           </div>
         </form>

         <h1>{props.defaultCity}</h1>
         <div className="overview">
           <h1> </h1>
           <ul>
           
             <li>
               <FormattedDate date={weatherData.date.getDay()} />
             </li>

             <li className="text-capitalize">{weatherData.description}</li>
           </ul>
         </div>

         <div className="row">
           <div className="col-6">
             <div className="d-flex weather-temperature">
               <img src={weatherData.iconUrl} alt="img" className="mt-3" />

               <div className="mt-3">
                 <strong className="temperature ps-1">
                   {Math.round(weatherData.temperature)}
                 </strong>

                 <span className="units">°C</span>
               </div>
             </div>
           </div>

           <div className="col-6 mt-4 ps-5">
             <ul>
               <li> wind: {weatherData.wind} / km/h</li>

               <li>humidity: {weatherData.humidity}%</li>
             </ul>
           </div>
         </div>
       </div>
     );
   }else{
 
  const apiKey = "5cf053ofb32b9t3e1a2bc6055da407d4";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return" loading"

   }

}












///////////////////
// export default function WeatherSearch(props) {
//   const [weatherData, setWeatherData] = useState({ ready: false });

//   function handleResponse(response) {
//     console.log(response.data);
    

//     setWeatherData({
//       ready: true,
//       temperature: response.data.temperature,
//       humidity: response.data.temperature.humidity,
//       date: "saturday 7:00",
//       description: response.data.condition.description,
//       iconUrl: "https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png",

//       wind: response.data.wind.speed,
//       city: response.data.city,
//     });

//     }


//   if (weatherData.ready) {
//     return (
//       <div className="WeatherSearch">
//         <form>
//           <div className="row">
//             <div className="col-9">
//               <input
//                 type="search"
//                 placeholder="Enter a city"
//                 autoFocus="on"
//                 className="form-control"
//               />
//             </div>

//             <div className="col-3">
//               <input
//                 type="submit"
//                 value="search"
//                 className="btn btn-primary w-100"
//               />
//             </div>
//           </div>
//         </form>

//         <div className="overview">
//           <h1 id="city"> {weatherData.city}</h1>
//           <ul>
//             <li> {weatherData.date}</li>
//             <li className="text-capitalize">{weatherData.description}</li>
//           </ul>
//         </div>

//         <div className="row">
//           <div className="col-6">
//             <div className="d-flex weather-temperature">
             

//               <img src={weatherData.iconUrl} alt={weatherData.description} />

//               <div className="mt-3">
//                 <strong className="temperature">
//                   {weatherData.temperature}
//                 </strong>

//                 <span className="units">°C</span>
//               </div>
//             </div>
//           </div>

//           <div className="col-6">
//             <ul>
//               <li>wind: {weatherData.wind}/ km/h</li>

//               <li>humidity:{weatherData.humidity} %</li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     );
//   } else {
//     const apiKey = "5cf053ofb32b9t3e1a2bc6055da407d4";


//     let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultcity}&key=${apiKey}&units=metric`;
//     axios.get(apiUrl).then(handleResponse);

//     return "loading.........";
//   }
// }


