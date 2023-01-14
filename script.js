//operator variables
let displayCalculator = document.getElementById("calculator-display");
const dotBtn = document.getElementById("dot-btn");
let equalBtn = document.getElementById("equal-btn");
let backspaceBtn = document.getElementById("backspace-btn");
const clearBtn = document.getElementById("clear-btn");

//selecting all numbers with the class bth-number
//looping through each one with forEach
//adding eventListener click with callback function
const calculateNumbers = document.querySelectorAll('.btn-number');
calculateNumbers.forEach(btn => {
  btn.addEventListener('click', displayNumbers);
  function displayNumbers(e) {
    displayCalculator.textContent += e.target.textContent;
  };
});

//selecting all operators with class bth-operator
//looping through each one with forEach
//adding eventListener click with callback function
const calculatorOperators = document.querySelectorAll('.btn-operator');
calculatorOperators.forEach(operator => {
  operator.addEventListener('click', showCalculations);
  function showCalculations(e) {
    displayCalculator.textContent += e.target.textContent;
  };
});


let operandOne = "";
let operandTwo = "";
let operator = "";


equalBtn.addEventListener('click', function() {
  // operandTwo = displayCalculator.textContent;
  // console.log(operandTwo);
  // console.log(operate("2", "+", "2"))
});

clearBtn.addEventListener('click', function () {
  if(displayCalculator.textContent !== "") {
    displayCalculator.textContent = "";
  }
});

backspaceBtn.addEventListener('click', function () {

});

// dotBtn.addEventListener('click', function () {
//   if(displayCalculator.textContent === "") {
//     console.log("ERROR");
//   } else {
//     displayCalculator.textContent += ".";
//   }
// });

//operate function that calls one of the four calculate
//functions based on operator as string
function operate(operandOne, operator, operandTwo) {
  // let saveOperation;
  if(operator === "+") {
    // saveOperation = operator;
    return addOperands(operandOne, operandTwo);
  } else if (operator === "-") {
    // saveOperation = operator;
    return subtractOperands(operandOne, operandTwo);
  } else if (operator === "*") {
    // saveOperation = operator;
    return multiplyOperands(operandOne, operandTwo);
  } else if (operator === "/") {
    // saveOperation = operator;
    return divideOperands(operandOne, operandTwo);
  }
  // saveOperation = operator;
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
