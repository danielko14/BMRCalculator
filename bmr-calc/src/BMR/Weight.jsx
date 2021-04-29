import React from 'react';
import {
  InputAdornment,
  FormControl,
  FormHelperText,
  Input
} from '@material-ui/core';

const WeightForm = ({ handleWeightChange }) => {
  return (
    <div>
      <FormControl>
        <Input
          id="weight"
          onChange={(e) => handleWeightChange(e.target.value)}
          endAdornment={<InputAdornment position="end">lbs</InputAdornment>}
        />
        <FormHelperText>Weight</FormHelperText>
      </FormControl>
    </div>
  )
}

export default WeightForm;