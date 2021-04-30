import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  bmrDisplay: {
    textAlign: 'center',
    border: '2px solid',
    borderColor: 'white',
    height: '30vh',
    width: '70vw',
    fontSize: '200px',
    fontFamily: 'Architects Daughter, cursive'
  }
}));

const BMRDisplay = ({ bmr }) => {
  const classes = useStyles();
  let roundedBMR = bmr.toString().slice(0, 7)
  return (
    <div
      id='bmr-displayer'
      className={classes.bmrDisplay}
    >
      {roundedBMR}
    </div>
  )
}

export default BMRDisplay;