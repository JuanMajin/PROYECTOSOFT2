// index.js
function sum(a, b) {
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
      throw new Error("Division by zero is not allowed");
    }
    return a / b;
}

function fibonacci(num) {
    if(num == 0) {
      return 0;
    } else if(num == 1) {
      return 1;
    } else {
      return fibonacci(num-1) + fibonacci(num-2);
    }
}
  
module.exports = {
    sum,
    subtract,
    multiply,
    divide,
    fibonacci
};
  
  