//variables
const displayCalculator = document.getElementById('calculator-display');
const clearBtn = document.getElementById('clear-btn');
const backspaceBtn = document.getElementById('backspace-btn');
const sevenBtn = document.getElementById('seven-btn');
const eightBtn = document.getElementById('eight-btn');
const nineBtn = document.getElementById('nine-btn');
const addBtn = document.getElementById('add-btn');
const fourBtn = document.getElementById('four-btn');
const fiveBtn = document.getElementById('five-btn');
const sixBtn = document.getElementById('six-btn');
const subtractBtn = document.getElementById('subtract-btn');
const oneBtn = document.getElementById('one-btn');
const twoBtn = document.getElementById('two-btn');
const threeBtn = document.getElementById('three-btn');
const multiplyBtn = document.getElementById('multiply-btn');
const zeroBtn = document.getElementById('zero-btn');
const dotBtn = document.getElementById('dot-btn');
const equalBtn = document.getElementById('equal-btn');
const divideBtn = document.getElementById('divide-btn');


//display numbers event listeners
oneBtn.addEventListener('click', function () {
  console.log(displayNumberOne());
});

twoBtn.addEventListener('click', function () {
  console.log(displayNumberTwo());
});

threeBtn.addEventListener('click', function () {
  console.log(displayNumberThree());
});

fourBtn.addEventListener('click', function () {
  console.log(displayNumberFour());
});

fiveBtn.addEventListener('click', function () {
  console.log(displayNumberFive());
});

sixBtn.addEventListener('click', function () {
  console.log(displayNumberSix());
});

sevenBtn.addEventListener('click', function () {
  console.log(displayNumberSeven());
});

eightBtn.addEventListener('click', function () {
  console.log(displayNumberEight());
});

nineBtn.addEventListener('click', function () {
  console.log(displayNumberNine());
});

//operand buttons
addBtn.addEventListener('click', function() {
  operate(add, operandOne, operandTwo);
})


//simple function for adding, subtracting, multiplying, dividing
function add (operandOne, operandTwo) {
  return operandOne + operandTwo;
}

function subtract (operandOne, operandTwo) {
  return operandOne - operandTwo;
}

function multiply (operandOne, operandTwo) {
  return operandOne * operandTwo;
}

function divide (operandOne, operandTwo) {
  return operandOne / operandTwo;
}

//operate function that calls the other functions 
// when performing different operations
function operate(add, operandOne, operandTwo) {
  add (operandOne, operandTwo)
}


function displayOnCalculator () {
  const displayCalculator = document.getElementById('calculator-display');
  displayCalculator.innerText = 0;
}

displayOnCalculator();


function displayNumberOne () {
 const displayCalculator = document.getElementById('calculator-display');
 let result = displayCalculator.innerText = 1;
 return result;
}


function displayNumberTwo () {
  const displayCalculator = document.getElementById('calculator-display');
  displayCalculator.innerText = 2;
 }

 function displayNumberThree () {
  const displayCalculator = document.getElementById('calculator-display');
  displayCalculator.innerText = 3;
 }

 function displayNumberFour () {
  const displayCalculator = document.getElementById('calculator-display');
  displayCalculator.innerText = 4;
 }

 function displayNumberFive () {
  const displayCalculator = document.getElementById('calculator-display');
  displayCalculator.innerText = 5;
 }

 function displayNumberSix () {
  const displayCalculator = document.getElementById('calculator-display');
  displayCalculator.innerText = 6;
 }

 function displayNumberSeven () {
  const displayCalculator = document.getElementById('calculator-display');
  displayCalculator.innerText = 7;
 }

 function displayNumberEight () {
  const displayCalculator = document.getElementById('calculator-display');
  displayCalculator.innerText = 8;
 }

 function displayNumberNine () {
  const displayCalculator = document.getElementById('calculator-display');
  displayCalculator.innerText = 9;
 }





