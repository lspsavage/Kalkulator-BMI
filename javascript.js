let button = document.getElementById("btn");

button.addEventListener("click", () => {
  const height = parseInt(document.getElementById("height").value);
  const weight = parseInt(document.getElementById("weight").value);
  const result = document.getElementById("output");
  let height_status = false,
    weight_status = false;

  if (height === "" || isNaN(height) || height <= 0) {
    document.getElementById("height_eror").innerHTML = "Tolong masukan berat badan anda";
  } else {
    document.getElementById("height_eror").innerHTML = "";
    height_status = true;
  }

  if (weight === "" || isNaN(weight) || weight <= 0) {
    document.getElementById("weight_eror").innerHTML = "Tolong masukan tinggi anda";
  } else {
    document.getElementById("weight_eror").innerHTML = "";
    weight_status = true;
  }

  if (age === "" || isNaN(age) || age <= 0) {
    document.getElementById("age_eror").innerHTML = "Tolong masukan Usia anda";
  } else {
    document.getElementById("age_eror").innerHTML = "";
    weight_status = true;
  }

  if (height_status && weight_status) {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    if (bmi < 18.6) {
      result.innerHTML = "Berat Badan Kurang " + "<br>" + bmi;
    } else if (bmi >= 18.6 && bmi < 24.9) {
      result.innerHTML = "Normal : " + "<br>" + bmi;
    } else {
      result.innerHTML = "Berat Badan Berlebih : " + "<br>" + bmi;
    }
  } else {
    alert("The form has eror");
    result.innerHTML = "";
  }
});
