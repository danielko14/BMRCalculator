import React from 'react';
import {
  FormControl,
  Select,
  MenuItem,
  FormHelperText
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: 'Architects Daughter, cursive',
    color: 'white',
    fontSize: '28px',
    borderBottomColor: 'white',
    '& .MuiInput-underline:before': {
      borderBottomColor: 'white',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'white',
    },
  },
  selected: {
    '&.Mui-selected': {
        color: "black",
        fontWeight: 600,
        '& .MuiSelect-icon': {
          color: 'white'
        },
    }
  }
}));

const GenderSelect = ({ handleGenderChange, gender }) => {
  const classes = useStyles();
  return (
    <div>
      <FormControl className={classes.root}>
        <Select
          id="gender-select"
          displayEmpty
          className={classes.root}
          value={gender}
          onChange={(e) => handleGenderChange(e.target.value)}
        >
          <MenuItem className={classes.selected} value=""></MenuItem>
          <MenuItem className={classes.selected} value="Male">Male</MenuItem>
          <MenuItem className={classes.selected} value="Female">Female</MenuItem>
        </Select>
        <FormHelperText style={{fontFamily: 'Architects Daughter, cursive', color: 'white', fontSize: '18px'}}>Gender</FormHelperText>
      </FormControl>
    </div>
  )
}

export default GenderSelect;