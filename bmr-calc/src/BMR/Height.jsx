import React from 'react';
import {
  InputAdornment,
  FormControl,
  FormHelperText,
  Input
} from '@material-ui/core';

const HeightForm = ({ handleFeetChange, handleInchChange }) => {
  return (
    <div>
      <FormControl>
        <Input
          id="height-ft"
          endAdornment={<InputAdornment position="end">ft</InputAdornment>}
          onChange={(e) => handleFeetChange(e.target.value)}
        />
        <FormHelperText>Height</FormHelperText>
      </FormControl>
      <FormControl>
        <Input
          id="height-in"
          endAdornment={<InputAdornment position="end">in</InputAdornment>}
          onChange={(e) => handleInchChange(e.target.value)}
        />
      </FormControl>
    </div>
  )
}

export default HeightForm;