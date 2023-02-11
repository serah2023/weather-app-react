// import logo from './logo.svg';
import './App.css';
import WeatherSearch from './WeatherSearch';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>weather app</h1>
        <WeatherSearch city="paris" />
        <p>
        
          <a href="https://github.com/serah2023/weather-app-react">
            open source code
          </a>
          by sara zolfaghari;
        </p>
      </header>
    </div>
  );
}

export default App;



