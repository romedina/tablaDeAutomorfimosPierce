import React, { useState } from "react";
import { Grid, Button, TextField } from "@material-ui/core";

export const Automorphism = () => {
  const [inputVector, setInputVector] = useState([0, 1, 0, 1]);
  const [outputVector, setOutputVector] = useState([]);

  const morgan = vector => {
    let auxVector = [null, null, null, null];

    auxVector[0] = !parseInt(vector[2]) ? 1 : 0;
    auxVector[1] = !parseInt(vector[3]) ? 1 : 0;
    auxVector[2] = !parseInt(vector[0]) ? 1 : 0;
    auxVector[3] = !parseInt(vector[1]) ? 1 : 0;

    return auxVector;
  };

  const handleClick = () => {
    setOutputVector(morgan(inputVector));
  };

  const handleChange = event => {
    setInputVector(event.target.value);
  };

  console.log(inputVector);

  return (
    <React.Fragment>
      <Grid container>
        <Grid item xs={6}>
          <h2>el vector de entrada es </h2>
          <div>
            <TextField
              onChange={handleChange}
              variant="outlined"
              type="number"
            />
          </div>
          <br />
          <Button variant="contained" color="primary" onClick={handleClick}>
            Obtener Dual
          </Button>
        </Grid>
        <Grid item xs={6}>
          <h2>el vector de salida es </h2>
          <div>
            {outputVector.map((elem, index) => {
              return <span key={index}>{elem.toString()}</span>;
            })}
          </div>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
