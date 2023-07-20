import React from "react";

export default function Search() {
  return (
    <div class="row pb-3">
      <div class="mb-1 col-6">
        <form action="">
          <input
            type="text"
            class="form-control"
            id="search-city"
            aria-describedby="search city"
            placeholder="Enter a city.."
          />
        </form>
      </div>
      <div class="mb-1 col-3">
        <button id="searchBtn" type="submit" class="btn btn-primary px-4">
          Search
        </button>
      </div>
      <div class="mb-1 col-3">
        <button id="currentBtn" type="submit" class="btn btn-primary px-4">
          Current
        </button>
      </div>
    </div>
  );
}
