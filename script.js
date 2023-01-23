//variables
const displayCalculator = document.getElementById("calculator-display");
const backspaceBtn = document.getElementById("backspace-btn");
const clearBtn = document.getElementById("clear-btn");
const dotBtn = document.getElementById("dot-btn");
const zeroBtn = document.getElementById("zero-btn");

//selecting all numbers with the class bth-number
//looping through each one with forEach
//adding eventListener click with callback function
const calculateNumbers = document.querySelectorAll('.btn-number');

function displayNumbers(e) {
  displayValue += e.target.textContent;
  displayCalculator.textContent = displayValue;
  let displayLength = 1000000000000000;

  if(displayCalculator.textContent > displayLength) {
    return displayCalculator.textContent = 'ERROR';
  }

  if(displayCalculator.textContent.includes(".")) {
    dotBtn.style.pointerEvents = "none";
  } else {
    dotBtn.style.pointerEvents = "auto";
  }
}

calculateNumbers.forEach(btn => {
  btn.addEventListener('click', displayNumbers);
});

let displayValue = "";
let operandOne = "";
let operator = "";
let operandTwo = "";
let result = "";
displayCalculator.textContent = "0";

const calculatorOperators = document.querySelectorAll('.btn-operator');

function showCalculations(e) {
  console.log(e.target.textContent);
  console.log('setting operandOne and operator...');
  if(!operandOne) {
    operandOne = displayValue;
    console.log(operandOne);
    operator = e.target.textContent;
    console.log('operandOne is', operandOne);
    console.log('operator is', operator);
    displayValue = "";
    displayCalculator.textContent = "";
  } else {
    operandTwo = displayValue;
    console.log('setting operandTwo...');
    displayValue = "";
    displayCalculator.textContent = "";
    console.log('operandTwo is', operandTwo);
    result = operate(operandOne, operator, operandTwo);
    displayCalculator.textContent = result;
    operandOne = result;
    // console.log('result is', result)
    console.log(operandOne);
    operator = e.target.textContent;
    console.log('new operator is', operator);
  }
}

calculatorOperators.forEach(operator => {
  operator.addEventListener('click', showCalculations);
});

clearBtn.addEventListener('click', function () {
  clearDisplay();
});

function clearDisplay() {
    //resets everything
  displayValue = "";
  displayCalculator.textContent = "0";
  if(operandOne && operator && operandTwo 
    && result) {
      operandOne = "";
      operator = "";
      operandTwo = "";
      result = "";
  }
};

function displayTempValue(value) {
  displayValue = "";
  displayCalculator.textContent = value
};

calculateNumbers.forEach(btn => {
  btn.addEventListener('click', displayNumbers);
});

// backspaceBtn.addEventListener('click', function () {
// });

//operate function that calls one of the four calculate
//functions based on operator as string
function operate(operandOne, operator, operandTwo) {
  if(operator === "+") {
    return addOperands(operandOne, operandTwo);
  } else if (operator === "-") {
    return subtractOperands(operandOne, operandTwo);
  } else if (operator === "*") {
    return multiplyOperands(operandOne, operandTwo);
  } else if (operator === "/") {
    return divideOperands(operandOne, operandTwo);
  } else if (operator === "=") {
    return displayCalculator.textContent = result;
  }
}

//functions that calculate the four simple operations 
//such as +, -, *, /
function addOperands(operandOne, operandTwo) {
  operandOne = Number(operandOne);
  operandTwo = Number(operandTwo);
  return (operandOne + operandTwo).toFixed(2)
  }

function subtractOperands(operandOne, operandTwo) {
  operandOne = Number(operandOne);
  operandTwo = Number(operandTwo);
  return (operandOne - operandTwo).toFixed(2)
}

function multiplyOperands(operandOne, operandTwo) {
  operandOne = Number(operandOne);
  operandTwo = Number(operandTwo);
  return (operandOne * operandTwo).toFixed(2);
}

function divideOperands(operandOne, operandTwo) {
  operandOne = Number(operandOne);
  operandTwo = Number(operandTwo);
  if(operandTwo === 0) {
    return displayCalculator.textContent = "Dividing on 0 is not allowed";
  }
  return (operandOne / operandTwo).toFixed(2)
}

// displayCalculator.textContent = "0";
// let displayValue = "";
//When click a number, the number will be appended to this empty string, and 
//only the number will show in the DOM when displayNumbers runs

