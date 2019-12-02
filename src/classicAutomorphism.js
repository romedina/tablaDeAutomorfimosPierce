import React, { useState } from "react";
import { Grid, Button, TextField, Typography } from "@material-ui/core";

export const Automorphism = () => {
  const [inputVector, setInputVector] = useState([0, 1, 0, 1]);
  const [outputVector, setOutputVector] = useState([]);
  const [xVec, setXVec] = useState([]);
  const [xOutputVec, setXOutputVec] = useState([]);

  const transformToX = vector => {
    let auxVector = [null, null, null, null];

    auxVector[0] = parseInt(vector[0], 2);
    auxVector[1] = parseInt(vector[2], 2);
    auxVector[2] = parseInt(vector[3], 2);
    auxVector[3] = parseInt(vector[1], 2);

    return auxVector;
  };

  const morgan = vector => {
    let auxVector = [null, null, null, null];

    auxVector[0] = !parseInt(vector[2], 2) ? 1 : 0;
    auxVector[1] = !parseInt(vector[3], 2) ? 1 : 0;
    auxVector[2] = !parseInt(vector[0], 2) ? 1 : 0;
    auxVector[3] = !parseInt(vector[1], 2) ? 1 : 0;

    return auxVector;
  };

  const sortOutput = vector => {
    let auxVector = [null, null, null, null];

    auxVector[0] = parseInt(vector[0], 2);
    auxVector[1] = parseInt(vector[3], 2);
    auxVector[2] = parseInt(vector[1], 2);
    auxVector[3] = parseInt(vector[2], 2);

    return auxVector;
  };

  const handleClick = () => {
    setOutputVector(sortOutput(morgan(transformToX(inputVector))));
    setXVec(transformToX(inputVector));
    setXOutputVec(morgan(transformToX(inputVector)));
  };

  const handleChange = event => {
    setInputVector(event.target.value);
  };

  return (
    <React.Fragment>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h3">Automorfismo Clásico </Typography>
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

        <Grid item xs={4}>
          <h2>el vector en X es </h2>
          <div>
            {xVec.map((elem, index) => {
              return <span key={index}>{elem.toString()}</span>;
            })}
          </div>
        </Grid>

        <Grid item xs={4}>
          <h2>el vector en X de salida es </h2>
          <div>
            {xOutputVec.map((elem, index) => {
              return <span key={index}>{elem.toString()}</span>;
            })}
          </div>
        </Grid>

        <Grid item xs={4}>
          <h2>el vector de salida ordenado es </h2>
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
