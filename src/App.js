import React from "react";
import "./App.css";

import ApodGrid from './components/ApodGrid';

function App() {
  return (
    <div className="App">
      <h1>
        NASA Photo of the day!🚀
      </h1>
      <ApodGrid />
    </div>
  );
}

export default App;
