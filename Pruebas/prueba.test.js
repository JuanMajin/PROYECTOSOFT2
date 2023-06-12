const { factorial, addSquares, elevado, calcularPromedio } = require("./prueba");
test("Factorial",() =>{
    expect(factorial(1)).toBe(1);
    expect(factorial(3)).toBe(6);
    expect(factorial(4)).toBe(24);
  })

  test("addSquare",() =>{
    expect(addSquares(2,3)).toBe(13);
    expect(addSquares(3,4)).toBe(25);
    expect(addSquares(4,5)).toBe(41);

  })

  test("elevado",() =>{
    expect(elevado(2,3)).toBe(8);
    expect(elevado(2,4)).toBe(16);
    expect(elevado(2,5)).toBe(32);

  })