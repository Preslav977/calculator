//variables
const displayCalculator = document.getElementById("calculator-display");
const equalBtn = document.getElementById("equal-btn");
const backspaceBtn = document.getElementById("backspace-btn");
const clearBtn = document.getElementById("clear-btn");

//selecting all numbers with the class bth-number
//looping through each one with forEach
//adding eventListener click with callback function
const calculateNumbers = document.querySelectorAll('.btn-number');

function displayNumbers(e) {
  displayCalculator.textContent += e.target.textContent;
  displayValue = displayCalculator.textContent;
  // console.log(displayValue);
}

calculateNumbers.forEach(btn => {
  btn.addEventListener('click', displayNumbers);
});

let displayValue = "";
let operandOne = "";
let operator = "";
let operandTwo = "";

const calculatorOperators = document.querySelectorAll('.btn-operator');

function showCalculations(e) {
  console.log(e.target.textContent);
  if(!operandOne) {
    operandOne = displayCalculator.textContent;
    console.log(operandOne);
    operator = e.target.textContent;
    console.log(operator);
    displayCalculator.textContent = "";
  } else if (!operandTwo) {
    operandTwo = displayValue;
    console.log(operandTwo);
  }
}

calculatorOperators.forEach(operator => {
  operator.addEventListener('click', showCalculations);
});

equalBtn.addEventListener('click', function() {
  console.log(operate(operandOne, operator, operandTwo));
});

clearBtn.addEventListener('click', function () {
  if(displayCalculator.textContent !== "") {
    displayCalculator.textContent = "";
  }
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
  }
}

//functions that calculate the four simple operations 
//such as +, -, *, /
function addOperands(operandOne, operandTwo) {
  operandOne = Number(operandOne);
  operandTwo = Number(operandTwo);
  return operandOne + operandTwo;
}

function subtractOperands(operandOne, operandTwo) {
  operandOne = Number(operandOne);
  operandTwo = Number(operandTwo);
  return operandOne - operandTwo;
}

function multiplyOperands(operandOne, operandTwo) {
  operandOne = Number(operandOne);
  operandTwo = Number(operandTwo);
  return operandOne * operandTwo;
}

function divideOperands(operandOne, operandTwo) {
  operandOne = Number(operandOne);
  operandTwo = Number(operandTwo);
  return operandOne / operandTwo;
}
