import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherSearch() {
  return (
    <div className="container">
      <div className="weather-app-wrapper">
        <div className="weather-app">
          <div class="mb-3 top-links">
            <a href="http://google.com" className="p-3 ">
              lisbon
            </a>
            <a href="http://google.com" className="p-3">
              paris
            </a>

            <a href="http://google.com" className="p-3">
              sydney
            </a>

            <a href="http://google.com" className="p-3">
              italy
            </a>
          </div>

          <form className="search-form" id="search-form">
            <div className="row">
              <div className="col-6">
                <input
                  type="search"
                  placeholder="Type a city.."
                  autofocus="on"
                  autocomplete="off"
                  id="city-input"
                  className="form-control shadow-sm mb-3 "
                />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  value="Search"
                  className="form-control btn btn-primary shadow-sm w-100"
                />
              </div>

              <div className="col-3">
                <button
                  className="btn btn-success w-100"
                  id="current-location-button"
                >
                  Current
                </button>
              </div>
            </div>
          </form>

          <div className="overview">
            <h1 id="city"> lisbon</h1>
            <ul>
              <li>
                {/* last updated: <span id="date"></span> */}
                saturday 12:45
              </li>
              <li>clear</li>

              {/* <li id="description">

                        </li> */}
            </ul>
          </div>

          <div className="row">
            <div className="col-6">
              <div className="d-flex weather-temperature">
                <div className="mt-4">
                  <ReactAnimatedWeather
                    icon="CLEAR_DAY"
                    color="black"
                    size={50}
                    animate={true}
                  />
                </div>

                <div>
                  <strong id="temperature" >
                    19
                  </strong>

                  <span className="units">
                    <a
                      href="http://google.com"
                      id="celsius-link"
                      class="active"
                    >
                      °C
                    </a>
                    |
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
                    {/* <i className="fa-solid fa-sun "></i>{" "} */}
                    <ReactAnimatedWeather
                      icon="SNOW"
                      color="black"
                      size={64}
                      animate={true}
                    />
                  </li>
                  <br />
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

        <small>
          <a
            href="https://github.com/serah2023/weather-app-react"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>
          , by sara zolfaghari
        </small>
      </div>
    </div>
  );
}
