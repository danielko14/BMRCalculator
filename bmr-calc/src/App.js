import React, { useState } from 'react';
import './App.css';
import BMRFormula from './BMR/BMRFormula.js';
import AgeForm from './BMR/Age.jsx';
import WeightForm from './BMR/Weight.jsx';
import HeightForm from './BMR/Height.jsx';
import GenderSelect from './BMR/Gender.jsx';
import CalculateButton from './BMR/CalculateBtn.jsx';
import BMRDisplay from './BMR/BMRDisplay.jsx';

const App = () => {

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
      <AgeForm handleAgeChange={handleAgeChange}/>
      <WeightForm handleWeightChange={handleWeightChange}/>
      <HeightForm handleFeetChange={handleFeetChange} handleInchChange={handleInchChange}/>
      <GenderSelect handleGenderChange={handleGenderChange} gender={gender}/>
      <CalculateButton handleCalculate={handleCalculate}/>
      <BMRDisplay bmr={bmr}/>
    </div>
  )
}

export default App;
