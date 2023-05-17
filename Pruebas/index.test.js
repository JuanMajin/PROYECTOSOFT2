// index.test.js
const { sum, subtract, multiply, divide } = require("./index");

test("sums two numbers", () => {
  expect(sum(1, 2)).toBe(3);
  expect(sum(-1, 1)).toBe(0);
  expect(sum(0, 0)).toBe(0);
});

test("subtracts two numbers", () => {
  expect(subtract(3, 2)).toBe(1);
  expect(subtract(-1, 1)).toBe(-2);
  expect(subtract(0, 0)).toBe(0);
});

test("multiplies two numbers", () => {
  expect(multiply(3, 2)).toBe(6);
  expect(multiply(-1, 1)).toBe(-1);
  expect(multiply(0, 0)).toBe(0);
});

test("divides two numbers", () => {
  expect(divide(6, 2)).toBe(3);
  expect(divide(-6, 2)).toBe(-3);
  expect(divide(6, -2)).toBe(-3);
  expect(() => divide(6, 0)).toThrow("Division by zero is not allowed");
});
