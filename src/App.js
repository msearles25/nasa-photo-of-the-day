import React from "react";
import "./App.css";

import ApodGrid from './components/ApodGrid';

function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      <ApodGrid />
    </div>
  );
}

export default App;
