//variables
let displayCalculator = document.getElementById("calculator-display");
const clearBtn = document.getElementById("clear-btn");
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

var operandOne = "";
var operandTwo = "";
var operator = "";

function displayNumberZero() {
  displayCalculator.textContent = "0";
}

function displayNumberOne() {
  displayCalculator.textContent += "1";
}

function displayNumberTwo() {
  displayCalculator.textContent += "2";
 
 }
 
 function displayNumberThree() {
  displayCalculator.textContent += "3";
 
 }

 function displayNumberFour() {
  displayCalculator.textContent += "4";
 
 }
 
 function displayNumberFive() {
  displayCalculator.textContent += "5";
 
 }

 function displayNumberSix() {
  displayCalculator.textContent += "6";
 
 }
 
 function displayNumberSeven() {
   displayCalculator.textContent += "7";
 
 }

 function displayNumberEight() {
  displayCalculator.textContent += "8";
 
 }
 
 function displayNumberNine() {
  displayCalculator.textContent += "9";
 
 }

zeroBtn.addEventListener('click', function(){
  console.log(displayNumberZero());
});

oneBtn.addEventListener('click', function() {
  console.log(displayNumberOne());
});

twoBtn.addEventListener('click', function(){
  console.log(displayNumberTwo());
});

threeBtn.addEventListener('click', function() {
  console.log(displayNumberThree());
});

fourBtn.addEventListener('click', function(){
  console.log(displayNumberFour());
});

fiveBtn.addEventListener('click', function() {
  console.log(displayNumberFive());
});

sixBtn.addEventListener('click', function(){
  console.log(displayNumberSix());
});

sevenBtn.addEventListener('click', function() {
  console.log(displayNumberSeven());
});

eightBtn.addEventListener('click', function(){
  console.log(displayNumberEight());
});

nineBtn.addEventListener('click', function() {
  console.log(displayNumberNine());
});

addBtn.addEventListener('click', function() {
  operandOne = displayCalculator.textContent;
  console.log(operandOne);
  displayCalculator.textContent += "+";
  operator = displayCalculator.textContent;
  console.log(operator);
  operandTwo = displayCalculator.textContent;
  console.log(operandTwo);
});

subtractBtn.addEventListener('click', function() {
  operandOne = displayCalculator.textContent;
  console.log(operandOne);
  displayCalculator.textContent += "-";
  operator = displayCalculator.textContent;
  console.log(operator);
  operandTwo = displayCalculator.textContent;
  console.log(operandTwo);
});

multiplyBtn.addEventListener('click', function() {
  operandOne = displayCalculator.textContent;
  console.log(operandOne);
  displayCalculator.textContent += "*";
  operator = displayCalculator.textContent;
  console.log(operator);
  operandTwo = displayCalculator.textContent;
  console.log(operandTwo);
});

divideBtn.addEventListener('click', function() {
  operandOne = displayCalculator.textContent;
  console.log(operandOne);
  displayCalculator.textContent += "/";
  operator = displayCalculator.textContent;
  console.log(operator);
  operandTwo = displayCalculator.textContent;
  console.log(operandTwo);
});

equalBtn.addEventListener('click', function() {
  console.log(operate(operandOne, operator, operandTwo))
});

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
  return Number(operandOne + operandTwo);
}

function subtractOperands(operandOne, operandTwo) {
  return Number(operandOne - operandTwo);
}

function multiplyOperands(operandOne, operandTwo) {
  return Number(operandOne * operandTwo);
}

function divideOperands(operandOne, operandTwo) {
  return Number(operandOne / operandTwo);
}
