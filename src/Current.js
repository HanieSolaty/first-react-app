import React from "react";
import MyImagae from "./images/download1.png";

export default function Current() {
  return (
    <div class="row pb-4">
      <div class="col-6">
        <div class="row">
          <h1 id="city">Isfahan</h1>
        </div>
        <div class="row">
          <p class="mb-0" id="description">
            clear sky
          </p>
        </div>
        <div class="row">
          <p class="mb-0" id="date">
            Jul 16, Sun 09:39
          </p>
        </div>
        <div class="row">
          <p class="mb-0">
            Humidity:
            <span class="weather-param">
              <span id="humidity"> 10</span>%
            </span>
            , Wind:
            <span class="weather-param">
              <span id="wind"> 1</span>km/h
            </span>
          </p>
        </div>
      </div>
      <div class="offset-2 col-4 align-self-center pt-2">
        <img
          id="temp-icon"
          class="main-temp-icon"
          src={MyImagae}
          alt="weather icon"
        />
        <h1 class="main-temp-text">
          <span id="temp">30</span>
          <sup class="temp-unit">°C</sup>
        </h1>
      </div>
    </div>
  );
}
