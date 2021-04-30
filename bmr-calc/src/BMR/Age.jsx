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
    color: 'white',
    fontSize: '28px',
    '& .MuiInput-underline:before': {
      borderBottomColor: 'white',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'white',
    },
  }
}));

const AgeForm = ({ handleAgeChange }) => {
  const classes = useStyles();
  return (
    <div>
      <FormControl className={classes.root}>
        <Input
          id="age"
          className={classes.root}
          onChange={(e) => handleAgeChange(e.target.value)}
          autoComplete='off'
        />
        <FormHelperText style={{fontFamily: 'Architects Daughter, cursive', color: 'white', fontSize: '18px'}}>Age (years)</FormHelperText>
      </FormControl>
    </div>
  )
}

export default AgeForm;