import React from "react";
import logo from "./bob.jpeg";
import Sidebar from "./Components/Sidebar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <h1 className="temp">
        There's still lots to do here... In the meantime, please visit my old
        portfolio:{" "}
        <a href="https://rcereghini.github.io/">
          https://rcereghini.github.io/
        </a>
      </h1>
    </div>
  );
}

export default App;
