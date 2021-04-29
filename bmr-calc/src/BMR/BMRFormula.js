const BMRFormula = (weight, height, age, gender) => {

  let convertedWeight = weight / 2.205;
  let convertedHeight = height * 2.54;

  if (gender === 'Male') {
    return (10 * convertedWeight) + (6.25 * convertedHeight) - (5 * age) + 5;
  }
  if (gender === 'Female') {
    return (10 * convertedWeight) + (6.25 * convertedHeight) - (5 * age) - 161;
  }
}

export default BMRFormula;

//BMR (kcal / day) = 10 * weight (kg) + 6.25 * height (cm) – 5 * age (y) + s (kcal / day),
//where s is +5 for males and -161 for females.
//conversions 1kg === 2.205lbs || 1in === 2.54cm