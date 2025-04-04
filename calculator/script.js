// script.js
const display = document.getElementById('result');
const buttons = document.querySelectorAll('.btn');

let currentInput = '';
let operator = '';
let firstOperand = '';
let secondOperand = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.getAttribute('data-value');

    if (value === 'C') {
      // Clear the display and reset all values
      currentInput = '';
      operator = '';
      firstOperand = '';
      secondOperand = '';
      display.value = '';
    } else if (value === 'DEL') {
      // Delete the last character
      currentInput = currentInput.slice(0, -1);
      display.value = currentInput;
    } else if (value === '=') {
      // Perform calculation
      if (firstOperand && operator && currentInput) {
        secondOperand = currentInput;
        const result = calculate(firstOperand, secondOperand, operator);
        display.value = result;
        currentInput = result;
        operator = '';
        firstOperand = '';
        secondOperand = '';
      }
    } else if (['+', '-', '*', '/'].includes(value)) {
      // Set operator and first operand
      if (currentInput) {
        firstOperand = currentInput;
        operator = value;
        currentInput = '';
      }
    } else {
      // Append number or decimal to current input
      currentInput += value;
      display.value = currentInput;
    }
  });
});

function calculate(first, second, operator) {
  const num1 = parseFloat(first);
  const num2 = parseFloat(second);

  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num1 / num2;
    default:
      return 0;
  }
}