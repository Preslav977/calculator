function add (numberOne, numberTwo) {
  return numberOne + numberTwo;
}

function subtract (numberOne, numberTwo) {
  return numberOne - numberTwo;
}

function multiply (numberOne, numberTwo) {
  return numberOne * numberTwo;
}

function divide (numberOne, numberTwo) {
  return numberOne / numberTwo;
}

function operate(operator, numberOne, numberTwo) {
  if (operator === "+") {
    return numberOne + numberTwo;
  } else if (operator === "-") {
    return numberOne - numberTwo;
  } else if (operator === "*") {
    return numberOne * numberTwo;
  } else if (operator === "/") {
    return numberOne / numberTwo;
  }
}
