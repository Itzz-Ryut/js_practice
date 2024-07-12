const form = document.querySelector('form');

form.addEventListener('submit',function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if (height === '' || height <0 || isNaN(height)){
        results.textContent = `Please enter number in Height ${height}`;
    }else if (weight === '' || weight <0 || isNaN(weight)){
        results.textContent = `Please enter number in weight ${weight}`;
    }else {
        const bmi = (weight / ((height * height)/10000)).toFixed(2);
        results.textContent = `Your BMI is ${bmi}`
        if (bmi<18.6) {
            results.textContent = `Your BMI is ${bmi} and you are underweight`
        }else if (bmi<24.9) {
            results.textContent = `Your BMI is ${bmi} and you are normal`
        }else if (bmi<29.9) {
            results.textContent = `Your BMI is ${bmi} and youare overweight`
        }else if (bmi>30) {
            results.textContent = `Your BMI is ${bmi} and you are obese`
        }
    }
});