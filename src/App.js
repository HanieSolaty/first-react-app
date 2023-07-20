import logo from "./logo.svg";
import "./App.css";
import React from "react";
import axios from "axios";
import Loader from "./Loader";

function App() {
  function setApiUrl(city) {
    const apiKey = "502dc8f7ae36e57af1974e18d16a86f8";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    return apiUrl;
  }

  function handleClick(e) {
    e.preventDefault();
    axios.get(setApiUrl(`Yazd`)).then(function(res) {
      alert(res.data.weather[0].description);
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="/" onClick={handleClick}>
          Learn React
        </a>
        <Loader type={"bubbles"} color={"#274a54e9"} />
      </header>
    </div>
  );
}

export default App;
