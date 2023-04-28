const operaciones = require('./operaciones');

describe('Operaciones', () => {
  test('Suma dos números', () => {
    expect(operaciones.suma(4, 2)).toBe(6);
  });

  test('Resta dos números', () => {
    expect(operaciones.resta(4, 2)).toBe(2);
  });

  test('Divide dos números', () => {
    expect(operaciones.division(4, 2)).toBe(2);
  });
});

