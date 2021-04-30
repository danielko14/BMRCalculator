import React from 'react';
import {
  InputAdornment,
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
    borderBottomColor: 'white',
    marginRight: '4px',
    marginLeft: '4px',
    '& .MuiInput-underline:before': {
      borderBottomColor: 'white',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'white',
    },
  }
}));

const HeightForm = ({ handleFeetChange, handleInchChange }) => {
  const classes = useStyles();
  return (
    <div>
      <FormControl className={classes.root}>
        <Input
          id="height-ft"
          endAdornment={<InputAdornment position="end">ft</InputAdornment>}
          onChange={(e) => handleFeetChange(e.target.value)}
          className={classes.root}
          autoComplete='off'
        />
        <FormHelperText style={{fontFamily: 'Architects Daughter, cursive', color: 'white', fontSize: '18px'}}>Height (ft)</FormHelperText>
      </FormControl>
      <FormControl className={classes.root}>
        <Input
          id="height-in"
          endAdornment={<InputAdornment position="end">in</InputAdornment>}
          onChange={(e) => handleInchChange(e.target.value)}
          className={classes.root}
          autoComplete='off'
        />
        <FormHelperText style={{fontFamily: 'Architects Daughter, cursive', color: 'white', fontSize: '18px'}}>Height (in)</FormHelperText>
      </FormControl>
    </div>
  )
}

export default HeightForm;