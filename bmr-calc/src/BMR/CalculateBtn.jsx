import React from 'react';
import { Button } from '@material-ui/core';

const CalculateButton = ({ handleCalculate }) => {
  return (
    <div>
      <Button
        size="large"
        color="secondary"
        onClick={(e) => handleCalculate()}
      >
        calculate
      </Button>
    </div>
  )
}

export default CalculateButton;