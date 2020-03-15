import React from "react";
import "./App.css";
import Tracker from "./ordertracker-component";

function App() {
  return (
    <div className="App">
      <Tracker date="Monday, the 5th" status="out for delivery" />
    </div>
  );
}

export default App;
