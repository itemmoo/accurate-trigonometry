// Add numbers and operations to the input display
function number(value) {
    document.myfrom.mytxt.value += value;
}

function clearDisplay() {
    document.myfrom.mytxt.value = '';
    document.myfrom.mytxtshow.value = '';
}

function square() {
    const input = parseFloat(document.myfrom.mytxt.value);
    if (!isNaN(input)) {
        document.myfrom.mytxtshow.value = input ** 2;
    } else {
        document.myfrom.mytxtshow.value = "Error!";
    }
}

function cubed() {
    const input = parseFloat(document.myfrom.mytxt.value);
    if (!isNaN(input)) {
        document.myfrom.mytxtshow.value = input ** 3;
    } else {
        document.myfrom.mytxtshow.value = "Error!";
    }
}

function sqrt2() {
    const input = parseFloat(document.myfrom.mytxt.value);
    if (!isNaN(input) && input >= 0) {
        document.myfrom.mytxtshow.value = Math.sqrt(input);
    } else {
        document.myfrom.mytxtshow.value = "Error!";
    }
}

function sqrt3() {
    const input = parseFloat(document.myfrom.mytxt.value);
    if (!isNaN(input)) {
        document.myfrom.mytxtshow.value = Math.cbrt(input);
    } else {
        document.myfrom.mytxtshow.value = "Error!";
    }
}

// Trigonometric functions
function sinclick() {
    const input = parseFloat(document.myfrom.mytxt.value);
    if (!isNaN(input)) {
        document.myfrom.mytxtshow.value = Math.sin(toRadians(input)).toFixed(5);
    } else {
        document.myfrom.mytxtshow.value = "Error!";
    }
}

function cosclick() {
    const input = parseFloat(document.myfrom.mytxt.value);
    if (!isNaN(input)) {
        document.myfrom.mytxtshow.value = Math.cos(toRadians(input)).toFixed(5);
    } else {
        document.myfrom.mytxtshow.value = "Error!";
    }
}

function tanclick() {
    const input = parseFloat(document.myfrom.mytxt.value);
    if (!isNaN(input)) {
        document.myfrom.mytxtshow.value = Math.tan(toRadians(input)).toFixed(5);
    } else {
        document.myfrom.mytxtshow.value = "Error!";
    }
}

function cscclick() {
    const input = parseFloat(document.myfrom.mytxt.value);
    if (!isNaN(input)) {
        const sinValue = Math.sin(toRadians(input));
        document.myfrom.mytxtshow.value = sinValue === 0 ? "Error!" : (1 / sinValue).toFixed(5);
    } else {
        document.myfrom.mytxtshow.value = "Error!";
    }
}

function secclick() {
    const input = parseFloat(document.myfrom.mytxt.value);
    if (!isNaN(input)) {
        const cosValue = Math.cos(toRadians(input));
        document.myfrom.mytxtshow.value = cosValue === 0 ? "Error!" : (1 / cosValue).toFixed(5);
    } else {
        document.myfrom.mytxtshow.value = "Error!";
    }
}

function cotclick() {
    const input = parseFloat(document.myfrom.mytxt.value);
    if (!isNaN(input)) {
        const tanValue = Math.tan(toRadians(input));
        document.myfrom.mytxtshow.value = tanValue === 0 ? "Error!" : (1 / tanValue).toFixed(5);
    } else {
        document.myfrom.mytxtshow.value = "Error!";
    }
}

function BACKSPC() {
    const currentValue = document.myfrom.mytxt.value;
    document.myfrom.mytxt.value = currentValue.slice(0, -1);
}

function equal() {
    try {
        const result = Function(`'use strict'; return (${document.myfrom.mytxt.value})`)();
        document.myfrom.mytxtshow.value = result;
    } catch (error) {
        document.myfrom.mytxtshow.value = "Error!";
    }
}
function logNatural() {
    const input = parseFloat(document.myfrom.mytxt.value);
    if (!isNaN(input) && input > 0) {
        document.myfrom.mytxtshow.value = Math.log(input).toFixed(5);
    } else {
        document.myfrom.mytxtshow.value = "Error!";
    }
}

function logBase() {
    const input = document.myfrom.mytxt.value.split(',');
    if (input.length === 2) {
        const x = parseFloat(input[0]);
        const base = parseFloat(input[1]);
        if (!isNaN(x) && x > 0 && !isNaN(base) && base > 0 && base !== 1) {
            const result = Math.log(x) / Math.log(base);
            document.myfrom.mytxtshow.value = result.toFixed(5);
        } else {
            document.myfrom.mytxtshow.value = "Error!";
        }
    } else {
        document.myfrom.mytxtshow.value = "Error!";
    }
}
function factorial() {
    const input = parseInt(document.myfrom.mytxt.value, 10);

    if (isNaN(input) || input < 0) {
        document.myfrom.mytxtshow.value = "Error!";
    } else if (input === 0) {
        document.myfrom.mytxtshow.value = 1;
    } else {
        let result = 1;
        for (let i = 1; i <= input; i++) {
            result *= i;
        }
        document.myfrom.mytxtshow.value = result;
    }
}
function powerByN() {
    const input = document.myfrom.mytxt.value.trim();
    const parts = input.split(',');

    if (parts.length === 2) {
        const base = parseFloat(parts[0]);
        const exponent = parseFloat(parts[1]);

        if (!isNaN(base) && !isNaN(exponent)) {
            const result = Math.pow(base, exponent);
            document.myfrom.mytxtshow.value = result.toFixed(5);
        } else {
            document.myfrom.mytxtshow.value = "Error!";
        }
    } else {
        document.myfrom.mytxtshow.value = "Error!";
    }
}
function insertPi() {
    const currentValue = document.myfrom.mytxt.value;
    document.myfrom.mytxt.value = currentValue + Math.PI.toFixed(8);
}
function powerByUser() {
    const base = parseFloat(document.myfrom.mytxt.value); // Parse base from input

    if (!isNaN(base)) {
        const exponent = parseFloat(prompt("Enter the value of -y:")); // Prompt for exponent
        if (!isNaN(exponent)) {
            const result = Math.pow(base, exponent); // Calculate base^exponent
            document.myfrom.mytxtshow.value = result.toFixed(5); // Display result
        } else {
            document.myfrom.mytxtshow.value = "Error!"; // Invalid exponent
        }
    } else {
        document.myfrom.mytxtshow.value = "Error!"; // Invalid base
    }
}
// Helper function to convert degrees to radians
function toRadians(degrees) {
    return degrees * (Math.PI / 180);
}

// JavaScript to automatically focus the input field on page load
window.onload = function() {
    document.getElementById('display').focus();
};
function clearDisplay() {
    document.getElementById('degreeInput').value = '';
    document.getElementById('display').innerText = '';
    myfrom.mytxt.value = '';
    myfrom.mytxtshow.value = '';
    document.getElementById('display').focus();
}
// Open the user manual pop-up
function openManual() {
    document.getElementById("userManual").style.display = "block";
}

// Close the user manual pop-up
function closeManual() {
    document.getElementById("userManual").style.display = "none";
}