//variables
let displayCalculator = document.getElementById("calculator-display");
let clearBtn = document.getElementById("clear-btn");
let backspaceBtn = document.getElementById("backspace-btn");
const sevenBtn = document.getElementById("seven-btn");
const eightBtn = document.getElementById("eight-btn");
const nineBtn = document.getElementById("nine-btn");
let addBtn = document.getElementById("add-btn");
const fourBtn = document.getElementById("four-btn");
const fiveBtn = document.getElementById("five-btn");
const sixBtn = document.getElementById("six-btn");
let subtractBtn = document.getElementById("subtract-btn");
const oneBtn = document.getElementById("one-btn");
const twoBtn = document.getElementById("two-btn");
const threeBtn = document.getElementById("three-btn");
let multiplyBtn = document.getElementById("multiply-btn");
const zeroBtn = document.getElementById("zero-btn");
const dotBtn = document.getElementById("dot-btn");
let equalBtn = document.getElementById("equal-btn");
let divideBtn = document.getElementById("divide-btn");

firstNumber = "";
secondNumber = "";
operator = "";

function displayCalculatorValues(operandOne, operator, operandTwo) {
    displayCalculator.textContent = `${operandOne}${operator}${operandTwo}`;
}

function saveNumber(operand) {
  if(operator) {
    //if exist 
    operand += secondNumber;
   //add it to the secondNumber and return it
   return operand;
  } else {
    //if it doesn't exist
    operand += firstNumber;
    //add it to the firstNumber and return it
    return operand;
  }
}

// zeroBtn.addEventListener('click', function () {
//   console.log(saveNumber("0"));
//   console.log(displayCalculatorValues("0", operator, "0"));
// });

oneBtn.addEventListener('click', function() {
  console.log(saveNumber("1"));
  console.log(displayCalculatorValues("1", operator, "1"));
});



//operate function that checks if the operator
//has some of the symbols and base on condition
//calls the methods and returns the result

function operate(operandOne, operator, operandTwo) {
  if (operator === "+") {
    return add(operandOne, operandTwo);
  } else if (operator === "-") {
    return subtract(operandOne, operandTwo);
  } else if (operator === "*") {
    return multiply(operandOne, operandTwo);
  } else if (operator === "/") {
    return divide(operandOne, operandTwo);
  }
}

//function that does the simply adding,
//subtracting, multiplying, dividing

function add(operandOne, operandTwo) {
  return Number(operandOne + operandTwo);
}

function subtract(operandOne, operandTwo) {
  return Number(operandOne - operandTwo);
}

function multiply(operandOne, operandTwo) {
  return Number(operandOne * operandTwo);
}

function divide(operandOne, operandTwo) {
  return Number(operandOne / operandTwo);
}
