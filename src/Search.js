import React, { useState } from "react";
import axios from "axios";

export default function Search({ setTheUrl }) {
  let [searchCity, setSearchCity] = useState(null);

  function newSearch(event) {
    setSearchCity(event.target.value);
  }

  //Search functionality
  function searchProcess(event) {
    event.preventDefault();
    setTheUrl(setApiUrl(searchCity));
    setSearchCity(null);
    //setDate();
  }

  //Current Button functionality
  function setApiUrl(city) {
    const apiKey = "502dc8f7ae36e57af1974e18d16a86f8";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    return apiUrl;
  }

  function getCityName(response) {
    let cityName = response.data[0].name;
    setTheUrl(setApiUrl(cityName));
    // axios.get(setApiUrl(cityName)).then(setWeatherAtrr);
  }

  function handleLocation(location) {
    let lat = location.coords.latitude;
    let lon = location.coords.longitude;

    let apiKey = "502dc8f7ae36e57af1974e18d16a86f8";
    let apiUrl = `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=&appid=${apiKey}`;

    axios.get(apiUrl).then(getCityName);
  }

  function currentLocation() {
    navigator.geolocation.getCurrentPosition(handleLocation);
  }

  return (
    <div className="row pb-3">
      <div className="mb-1 col-6">
        <form action="" onSubmit={searchProcess}>
          <input
            type="text"
            className="form-control"
            id="search-city"
            aria-describedby="search city"
            placeholder="Enter a city.."
            onChange={newSearch}
          />
        </form>
      </div>
      <div className="mb-1 col-3">
        <button
          id="searchBtn"
          type="submit"
          className="btn btn-primary px-4"
          onClick={searchProcess}
        >
          Search
        </button>
      </div>
      <div className="mb-1 col-3">
        <button
          id="currentBtn"
          type="submit"
          className="btn btn-primary px-4"
          onClick={currentLocation}
        >
          Current
        </button>
      </div>
    </div>
  );
}
