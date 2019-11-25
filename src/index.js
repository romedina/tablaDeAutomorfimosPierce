import React from "react";
import ReactDOM from "react-dom";
import { Automorphism } from "./classicAutomorphism";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Tabla de automorfismos como máscara binaria</h1>
      <Automorphism />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
