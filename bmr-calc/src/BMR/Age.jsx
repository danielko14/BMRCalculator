import React from 'react';
import {
  InputAdornment,
  FormControl,
  FormHelperText,
  Input
} from '@material-ui/core';

const AgeForm = ({ handleAgeChange }) => {
  return (
    <div>
      <FormControl>
        <Input
          id="age"
          onChange={(e) => handleAgeChange(e.target.value)}
          endAdornment={<InputAdornment position="end">years</InputAdornment>}
        />
        <FormHelperText>Age</FormHelperText>
      </FormControl>
    </div>
  )
}

export default AgeForm;