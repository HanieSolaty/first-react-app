import React, { useState } from "react";
import axios from "axios";

export default function Current(props) {
  let [city, setCity] = useState(null);
  let [description, setDescription] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);
  let [temp, setTemp] = useState(null);
  let [iconCode, setIiconCode] = useState(null);
  let [dateStr, setDateStr] = useState(null);

  function setApiUrl(city) {
    const apiKey = "502dc8f7ae36e57af1974e18d16a86f8";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    return apiUrl;
  }

  function setDate() {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    let localDate = new Date();
    let month = months[localDate.getMonth()];
    let date = localDate.getDate();
    let day = days[localDate.getDay()];
    let hour = `0${localDate.getHours()}`.slice(-2);
    let min = `0${localDate.getMinutes()}`.slice(-2);
    let dateString = `${month} ${date}, ${day} ${hour}:${min}`;
    setDateStr(dateString);
  }

  function setWeatherAtrr(response) {
    setCity(response.data.name);
    setDescription(response.data.weather[0].description);
    setHumidity(Math.round(response.data.main.humidity));
    setWind(Math.round(response.data.wind.speed));
    setTemp(Math.round(response.data.main.temp));
    setIiconCode(response.data.weather[0].icon);

    // Forecast location
    /* let lat = response.data.coord.lat;
    let lon = response.data.coord.lon;
    const apiKey = "502dc8f7ae36e57af1974e18d16a86f8";
    let apiUrlForecast = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrlForecast).then(displayForecast); */
  }

  function setDafault() {
    setDate();
    axios.get(setApiUrl("isfahan")).then(setWeatherAtrr);
  }

  setDafault();

  return (
    <div class="row pb-4">
      <div class="col-6">
        <div class="row">
          <h1 id="city">{city}</h1>
        </div>
        <div class="row">
          <p class="mb-0" id="description">
            {description}
          </p>
        </div>
        <div class="row">
          <p class="mb-0" id="date">
            {dateStr}
          </p>
        </div>
        <div class="row">
          <p class="mb-0">
            Humidity:
            <span class="weather-param">
              <span id="humidity"> {humidity}</span>%
            </span>
            , Wind:
            <span class="weather-param">
              <span id="wind"> {wind}</span>km/h
            </span>
          </p>
        </div>
      </div>
      <div class="offset-2 col-4 align-self-center pt-2">
        <img
          id="temp-icon"
          class="main-temp-icon"
          src={iconCode}
          alt="weather icon"
        />
        <h1 class="main-temp-text">
          <span id="temp">{temp}</span>
          <sup class="temp-unit">°C</sup>
        </h1>
      </div>
    </div>
  );
}
