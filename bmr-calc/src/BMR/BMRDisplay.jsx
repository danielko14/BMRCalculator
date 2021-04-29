import React from 'react';

const BMRDisplay = ({ bmr }) => {
  let roundedBMR = bmr.toString().slice(0, 7)
  return (
    <div>
      Your BMR is: {roundedBMR} kCal/day
    </div>
  )
}

export default BMRDisplay;