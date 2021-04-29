import React from 'react';
import {
  FormControl,
  Select,
  MenuItem,
  FormHelperText
} from '@material-ui/core';

const GenderSelect = ({ handleGenderChange, gender }) => {
  return (
    <div>
      <FormControl>
        <Select
          id="gender-select"
          displayEmpty
          value={gender}
          onChange={(e) => handleGenderChange(e.target.value)}
        >
          <MenuItem value=""></MenuItem>
          <MenuItem value="Male">Male</MenuItem>
          <MenuItem value="Female">Female</MenuItem>
        </Select>
        <FormHelperText>Gender</FormHelperText>
      </FormControl>
    </div>
  )
}

export default GenderSelect;