import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import './App.css';
import BMRFormula from './BMR/BMRFormula.js';
import AgeForm from './BMR/Age.jsx';
import WeightForm from './BMR/Weight.jsx';
import HeightForm from './BMR/Height.jsx';
import GenderSelect from './BMR/Gender.jsx';
import CalculateButton from './BMR/CalculateBtn.jsx';
import BMRDisplay from './BMR/BMRDisplay.jsx';
import Footer from './BMR/Footer.jsx';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  h1: {
    fontFamily: 'Rock Salt, cursive',
    borderBottom: '2px solid',
    borderColor: 'white !important',
    textAlign: 'center',
  },
  bmrText: {
    fontFamily: 'Architects Daughter, cursive',
    fontSize: '24px',
  },
  header: {
    backgroundImg: 'linear-gradient(45deg, #f3ec78, #af4261)'
  }
}));

const App = () => {
  const classes = useStyles();

  const [age, setAge] = useState(0);
  const [weight, setWeight] = useState(0);
  const [feet, setFeet] = useState(0);
  const [inches, setInches] = useState(0);
  const [gender, setGender] = useState('');
  const [bmr, setBmr] = useState(0);

  const handleAgeChange = (age) => setAge(age);
  const handleWeightChange = (weight) => setWeight(weight);
  const handleFeetChange = (ft) => setFeet(ft);
  const handleInchChange = (inches) => setInches(inches);
  const handleGenderChange = (gender) => setGender(gender);

  const handleCalculate = () => {
    if (!age || !weight || !feet || !inches || !gender) {
      alert('Please Fill Out All Forms');
      return
    }
    let heightIn = (parseInt(feet) * 12) + parseInt(inches);
    let BMR = BMRFormula(weight, heightIn, age, gender);
    setBmr(BMR);
  }

  return (
    <div>
      <h1 className={classes.h1}>BMR Bot</h1>
      <div id='bread-and-butter'>
        <Grid
          container
          spacing={9}
          direction="row"
          justify="center"
          alignItems="flex-start"
        >
          <Grid item xs={2}>
            <AgeForm handleAgeChange={handleAgeChange}/>
          </Grid>
          <Grid item xs={2}>
            <WeightForm handleWeightChange={handleWeightChange}/>
          </Grid>
          <Grid item xs={3}>
            <HeightForm handleFeetChange={handleFeetChange} handleInchChange={handleInchChange}/>
          </Grid>
          <Grid item xs={2}>
            <GenderSelect handleGenderChange={handleGenderChange} gender={gender}/>
          </Grid>
        </Grid>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={1}>
            <CalculateButton handleCalculate={handleCalculate}/>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={2}
          direction="column"
          justify="center"
          alignItems="center"
          className={classes.bmrText}
        >
          <Grid item xs={2}>
            Your BMR is:
          </Grid>
          <Grid item xs={12}>
            <BMRDisplay bmr={bmr}/>
          </Grid>
          <Grid item xs={2}>
            kCal/day
          </Grid>
        </Grid>
        <Grid
          container
          spacing={2}
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Footer/>
        </Grid>
      </div>
    </div>
  )
}

export default App;
