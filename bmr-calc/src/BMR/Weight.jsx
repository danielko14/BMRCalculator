import React from 'react';
import {
  FormControl,
  FormHelperText,
  Input
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: 'Architects Daughter, cursive',
    fontSize: '28px',
    color: 'white',
    borderBottomColor: 'white',
    '& .MuiInput-underline:before': {
      borderBottomColor: 'white',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'white',
    },
  }
}));

const WeightForm = ({ handleWeightChange }) => {
  const classes = useStyles();
  return (
    <div>
      <FormControl className={classes.root}>
        <Input
          id="weight"
          onChange={(e) => handleWeightChange(e.target.value)}
          className={classes.root}
          autoComplete='off'
        />
        <FormHelperText style={{fontFamily: 'Architects Daughter, cursive', color: 'white', fontSize: '18px'}}>Weight (lbs)</FormHelperText>
      </FormControl>
    </div>
  )
}

export default WeightForm;