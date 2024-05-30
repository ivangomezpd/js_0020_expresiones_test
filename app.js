// mathExpressions.js

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
      throw new Error("Cannot divide by zero.");
  }
  return a / b;
}

function modulus(a, b) {
  return a % b;
}

function exponent(a, b) {
  return a ** b;
}

function squareRoot(a) {
  if (a < 0) {
      throw new Error("Cannot take the square root of a negative number.");
  }
  return Math.sqrt(a);
}

function cube(a) {
  return a * a * a;
}

function absolute(a) {
  return Math.abs(a);
}

function sine(degrees) {
  return Math.sin(degrees * (Math.PI / 180));
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  modulus,
  exponent,
  squareRoot,
  cube,
  absolute,
  sine
};
