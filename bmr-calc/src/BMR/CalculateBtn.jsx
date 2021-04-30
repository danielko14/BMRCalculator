import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: '100%',
    padding: '50px',
    height: '50px',
    width: '50px',
    fontFamily: 'Architects Daughter, cursive',
    fontWeight: 'bold',
    backgroundColor: 'red',
    color: 'black',
    margin: '10px',
    '&:hover': {
      backgroundColor: 'deeppink'
    }
  }
}));

const CalculateButton = ({ handleCalculate }) => {
  const classes = useStyles();
  return (
    <div>
      <Button
        size="large"
        color="secondary"
        onClick={(e) => handleCalculate()}
        className={classes.root}
      >
        calculate
      </Button>
    </div>
  )
}

export default CalculateButton;