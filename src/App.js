import React from "react";
import logo from "./bob.jpeg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={logo}
          className="App-logo"
          alt="logo"
          style={{ borderRadius: "50%" }}
        />
        <p>COMING SOON: Robert Cereghini</p>
        <a className="App-link" href="rcereghini.github.io" target="_blank">
          Old Portfolio
        </a>
      </header>
    </div>
  );
}

export default App;
