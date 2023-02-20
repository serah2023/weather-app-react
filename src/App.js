import "./App.css";
import "./WeatherSearch.css";

import "bootstrap/dist/css/bootstrap.css";
import WeatherSearch from "./WeatherSearch";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <WeatherSearch defaultCity="Paris" />
        <footer>
          This project is coded by sara zolfaghari and is
          <a
            href="https://github.com/serah2023/new-react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            open sourced on GitHub
          </a>
          and
          <a href="https://spectacular-crostata-cb947d.netlify.app/">
            {" "}
            hosted on netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
