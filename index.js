function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  let heightM = height / 100;
  let bmi = weight / (heightM * heightM);
  window.alert(`Your BMI is: ${bmi}`);

  let bmistate;

  if (bmi < 18.5) {
    bmiState = "Underweight";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    bmiState = "Healthy Weight";
  } else if (bmi >= 25.0 && bmi < 30) {
    bmistate = "overweight";
  } else {
    bmistate = "Above Obesty";
  }

  window.alert(`your bmi state is: ${bmistate}`);

  if (age >= 19 && age <= 24) {
    bmistate = bmi >= 19 && bmi < 24 ? "Healthy" : "Not Healthy";
  } else if (age >= 25 && age <= 34) {
    bmistate = bmi >= 20 && bmi < 25 ? "Healthy" : "Not Healthy";
  } else if (age >= 35 && age <= 44) {
    bmistate = bmi >= 21 && bmi < 26 ? "Healthy" : "Not Healthy";
  } else if (age >= 45 && age <= 54) {
    bmistate = bmi >= 22 && bmi < 27 ? "Healthy" : "Not Healthy";
  } else if (age >= 55 && age <= 64) {
    bmistate = bmi >= 23 && bmi < 28 ? "Healthy" : "Not Healthy";
  } else if (age >= 65) {
    bmistate = bmi >= 24 && bmi < 29 ? "Healthy" : "Not Healthy";
  }

  window.alert(`your healthy state is: ${bmistate}`);
}
