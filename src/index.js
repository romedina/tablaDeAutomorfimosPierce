import React from "react";
import ReactDOM from "react-dom";
import { Automorphism } from "./classicAutomorphism";
import { TrivalentAutomorphism } from "./trivalentAutomorphism";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./styles.css";

const useStyles = makeStyles({
  text: {
    paddingTop: 30,
    paddingBottom: 60
  }
});

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <Typography variant="h5" className={classes.text}>
        Tabla de automorfismos como máscara binaria
      </Typography>
      <Automorphism />
      <br />
      <br />
      <br />
      <br />
      <TrivalentAutomorphism />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
