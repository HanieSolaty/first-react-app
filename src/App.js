import "./App.css";
import React, { useState } from "react";
// import Loader from "./Loader";
import Search from "./Search";
import Current from "./Current";
import Github from "./Github";

export default function App() {
  let [url, setUrl] = useState(null);
  const setTheUrl = (address) => {
    setUrl(address);
  };

  return (
    <div className="App mt-5">
      <div className="container p-4 mb-0">
        <Search setTheUrl={setTheUrl} />
        <hr />
        <Current newUrl={url} />
        <Github />
      </div>{" "}
    </div>
  );
}
