// Get references to the display and buttons
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.keys button');

let currentInput = '';
let previousInput = '';
let operator = '';

// Function to update the display
function updateDisplay(value) {
    display.value = value;
}

// Function to handle button clicks
function handleButtonClick(event) {
    const buttonText = event.target.textContent;

    if (buttonText >= '0' && buttonText <= '9' || buttonText === '.') {
        handleNumber(buttonText);
    } else if (buttonText === '/' || buttonText === '*' || buttonText === '-' || buttonText === '+') {
        handleOperator(buttonText);
    } else if (buttonText === '=') {
        calculate();
    }
}

// Function to handle number input
function handleNumber(number) {
    currentInput += number;
    updateDisplay(currentInput);
}

// Function to handle operator input
function handleOperator(op) {
    if (currentInput === '') return; // Don't allow operator input without a number
    if (previousInput !== '') {
        calculate(); // Calculate the result if there's already a previous input
    }
    operator = op;
    previousInput = currentInput;
    currentInput = '';
}

// Function to perform calculation
function calculate() {
    let result;
    const prev = parseFloat(previousInput);
    const curr = parseFloat(currentInput);

    if (isNaN(prev) || isNaN(curr)) return; // Prevent calculation if inputs are not valid numbers

    switch (operator) {
        case '/':
            result = prev / curr;
            break;
        case '*':
            result = prev * curr;
            break;
        case '-':
            result = prev - curr;
            break;
        case '+':
            result = prev + curr;
            break;
        default:
            return;
    }

    currentInput = result.toString();
    operator = '';
    previousInput = '';
    updateDisplay(currentInput);
}

// Add event listeners to buttons
buttons.forEach(button => {
    button.addEventListener('click', handleButtonClick);
});
