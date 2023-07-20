import "./App.css";
import React from "react";
import axios from "axios";
import Loader from "./Loader";
import Search from "./Search";
import Current from "./Current";
import Github from "./Github";

export default function App() {
  return (
    <div className="App mt-5">
      <div class="container p-4 mb-0">
        <Search />
        <hr />
        <Current />
        <Github />
      </div>{" "}
    </div>
  );
}
