import React from "react";
import { Grid, Button, TextField, Typography } from "@material-ui/core";

export const TrivalentAutomorphism = () => {
  const [input, setInput] = React.useState([]);
  const [output, setOutput] = React.useState([]);

  function rightNeg_single(val) {
    return (val + 1) % 3;
  }

  function leftNeg_single(val) {
    return (val + 2) % 3;
  }

  function shiftLeft(vec) {
    var auxVec = [];
    auxVec[0] = vec[1];
    auxVec[1] = vec[2];
    auxVec[2] = vec[0];
    return auxVec;
  }

  function shiftRight(vec) {
    var auxVec = [];
    auxVec[0] = vec[2];
    auxVec[1] = vec[0];
    auxVec[2] = vec[1];
    return auxVec;
  }

  function leftNeg_array(vec) {
    var auxVecA = [];
    var auxVecB = [];
    var auxVecC = [];
    var sortedVec = [];

    // separar en 3 vectores
    for (let i = 0; i < 3; i++) {
      auxVecA.push(vec[i]);
      auxVecB.push(vec[i + 3]);
      auxVecC.push(vec[i + 6]);
    }

    // mover a la izquierda los vectores
    auxVecA = shiftLeft(auxVecA);
    auxVecB = shiftLeft(auxVecB);
    auxVecC = shiftLeft(auxVecC);

    // hacer un join en un sólo vector moviendo una posición hacia arriba
    sortedVec = auxVecB.concat(auxVecC).concat(auxVecA);

    sortedVec.forEach((number, index) => {
      sortedVec[index] = rightNeg_single(number);
    });

    return sortedVec;
  }

  function rightNeg_array(vec) {
    var auxVecA = [];
    var auxVecB = [];
    var auxVecC = [];
    var sortedVec = [];

    // separar en 3 vectores
    for (let i = 0; i < 3; i++) {
      auxVecA.push(vec[i]);
      auxVecB.push(vec[i + 3]);
      auxVecC.push(vec[i + 6]);
    }

    // mover a la derecha los vectores
    auxVecA = shiftRight(auxVecA);
    auxVecB = shiftRight(auxVecB);
    auxVecC = shiftRight(auxVecC);

    // hacer un join en un sólo vector moviendo una posición hacia arriba
    sortedVec = auxVecC.concat(auxVecA).concat(auxVecB);

    sortedVec.forEach((number, index) => {
      sortedVec[index] = leftNeg_single(number);
    });

    return sortedVec;
  }

  const handleChange = event => {
    setInput(event.target.value);
  };

  console.log(leftNeg_array(input));

  //I = [2,1,0,1,1,1,0,1,0]
  //L=[2, 2, 2, 2, 1, 1, 2, 1, 0]
  //R = [2, 2, 0, 2, 1, 0, 0, 0, 0]
  //console.log(leftNeg_array(input))
  //console.log(rightNeg_array(input))

  return (
    <React.Fragment>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h3">Automorfismo Trivalente </Typography>
          <div>
            <TextField
              variant="outlined"
              type="number"
              onChange={handleChange}
            />
          </div>
          <br />
        </Grid>

        <Grid item xs={6}>
          <h2>El dual para N derecha es: </h2>
          <div>
            <p>{rightNeg_array(input)}</p>
          </div>
        </Grid>

        <Grid item xs={6}>
          <h2>El dual para N izquierda es: </h2>
          <div>
            <p>{leftNeg_array(input)}</p>
          </div>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
