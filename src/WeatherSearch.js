import React from "react";
import  "./WeatherSearch.css";

import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherSearch() {
  return (
    <div className="WeatherSearch">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="enter a city"
              autoFocus="on"
              className="form-control"
            />
          </div>

          <div className="col-3">
            <input type="submit" value="search" className="btn btn-primary w-100" />
          </div>
        </div>
      </form>

      <div className="overview">
        <h1 id="city"> lisbon</h1>
        <ul>
          <li>saturday 12:45</li>
          <li>clear</li>
        </ul>
      </div>

      <div className="row">
        <div className="col-6">
          <div className="d-flex weather-temperature">
            <div className="mt-4">
              <ReactAnimatedWeather
                icon="CLEAR_DAY"
                color="black"
                size={55}
                animate={true}
              />
            </div>

            <div className="mt-3">
              <strong className="temperature">19</strong>

              <span className="units">
                {/* <a href="http://google.com" id="celsius-link" class="active"> */}
                °C
                {/* </a> */}
                {/* | */}
              </span>
            </div>
          </div>
        </div>

        <div className="col-6">
          <ul>
            <li>
              Percipitation: <span id="Percipitation"></span>
            </li>

            <li i>
              wind: <span id="wind"> </span> km/h
            </li>
          </ul>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row ">
          <div className="col-2 nextdays">
            <ul>
              <li> Sun</li>
              <br />

              <li>
                <ReactAnimatedWeather
                  icon="SNOW"
                  color="black"
                  size={64}
                  animate={true}
                />
              </li>
              <br />

              <li> 9°</li>
            </ul>
          </div>

          <div className="col-2 nextdays">
            <ul>
              <li> Mon</li>
              <br />

              <li>
                {" "}
                <span>
                  {" "}
                  {/* <i className="fa-solid fa-sun "></i> */}
                  <ReactAnimatedWeather
                    icon="CLOUDY"
                    color="black"
                    size={64}
                    animate={true}
                  />
                </span>{" "}
              </li>
              <br />
              <br />

              <li> 9°</li>
            </ul>
          </div>

          <div className="col-2 nextdays">
            <ul>
              <li>Tus</li>
              <br />

              <li>
                {" "}
                <span>
                  {" "}
                  {/* <i className="fa-solid fa-sun "></i> */}
                  <ReactAnimatedWeather
                    icon="CLOUDY"
                    color="black"
                    size={64}
                    animate={true}
                  />
                </span>{" "}
              </li>
              <br />
              <br />

              <li> 9°</li>
            </ul>
          </div>

          <div className="col-2 nextdays">
            <ul>
              <li> Wed</li>

              <br />
              <li>
                {" "}
                <span>
                  {" "}
                  {/* <i className="fa-solid fa-sun "></i> */}
                  <ReactAnimatedWeather
                    icon="CLOUDY"
                    color="black"
                    size={64}
                    animate={true}
                  />
                </span>{" "}
              </li>
              <br />
              <br />

              <li> 9°</li>
            </ul>
          </div>

          <div className="col-2 nextdays">
            <ul>
              <li> Thu</li>

              <br />
              <li>
                {" "}
                <span>
                  {" "}
                  {/* <i className="fa-solid fa-sun "></i> */}
                  <ReactAnimatedWeather
                    icon="CLOUDY"
                    color="black"
                    size={64}
                    animate={true}
                  />
                </span>{" "}
              </li>
              <br />
              <br />

              <li> 9°</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
