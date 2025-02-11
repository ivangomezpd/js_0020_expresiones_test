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
    throw new Error("No se puede dividir por cero.");
  }
  return a / b;
}

function modulus(a, b) {
  return a % b;
}

function exponent(a, b) {
  return Math.pow(a, b);
}

function squareRoot(a) {
  if (a < 0) {
    throw new Error("No se puede calcular la raíz cuadrada de un número negativo.");
  }
  return Math.sqrt(a);
}

function cube(a) {
  return Math.pow(a, 3);
}

function absolute(a) {
  return Math.abs(a);
}

function sine(degrees) {
  return Math.sin((degrees * Math.PI) / 180);
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
  sine,
};
