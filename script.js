function calculateBMI() {
    var genderSelect = document.getElementById('gender');
    var heightInput = document.getElementById('height');
    var weightInput = document.getElementById('weight');
    var resultDiv = document.getElementById('result');
    var imageContainer = document.getElementById('image-container');

    var gender = genderSelect.value;
    var height = parseFloat(heightInput.value);
    var weight = parseFloat(weightInput.value);

    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        resultDiv.innerHTML = 'Please enter valid values for height and weight.';
        imageContainer.innerHTML = ''; // Clear previous images
        return;
    }

    var bmi = weight / ((height / 100) * (height / 100));
    var bmiCategory = getBMICategory(bmi);

    resultDiv.innerHTML = 'Your BMI is ' + bmi.toFixed(2) + ' (' + bmiCategory + ')';

    // Display image based on BMI and gender
    displayImage(bmiCategory, gender);
}

function getBMICategory(bmi) {
    if (bmi < 18.5) {
        return 'Underweight';
    } else if (bmi < 24.9) {
        return 'Normal weight';
    } else if (bmi < 29.9) {
        return 'Overweight';
    } else {
        return 'Obese';
    }
}

function displayImage(bmiCategory, gender) {
    var imageContainer = document.getElementById('image-container');
    var imageSrc = '';

    if (gender === 'male') {
        if (bmiCategory === 'Underweight') {
            imageSrc = 'underweight_male.jpg';
        } else if (bmiCategory === 'Normal weight') {
            imageSrc = 'normalweight_male.jpg';
        } else {
            imageSrc = 'overweight_male.jpg';
        }
    } else if (gender === 'female') {
        if (bmiCategory === 'Underweight') {
            imageSrc = 'underweight_female.jpg';
        } else if (bmiCategory === 'Normal weight') {
            imageSrc = 'normalweight_female.jpg';
        } else {
            imageSrc = 'overweight_female.jpg';
        }
    }

    // Display the selected image
    imageContainer.innerHTML = '<img src="' + imageSrc + '" alt="' + bmiCategory + '">';
}
