const {
    solveQuadraticEquation,
    squareRoot,
    logarithm,
    checkNumber
  } = require('./functions');

    describe('Función solveQuadraticEquation', () => {
  
      test('Debería devolver una única raíz real cuando el discriminante es cero', () => {
        const roots = solveQuadraticEquation(1, -4, 4);
        expect(roots).toEqual([2]);
      });
  
      test('Debería devolver un array vacío cuando no hay raíces reales', () => {
        const roots = solveQuadraticEquation(2, 1, 3);
        expect(roots).toEqual([]);
      });
  
      // Agrega más pruebas para cubrir diferentes casos y situaciones posibles
    });
  
    describe('Función squareRoot', () => {
      test('Debería devolver la raíz cuadrada de un número positivo', () => {
        const result = squareRoot(9);
        expect(result).toBe(3);
      });
  
      test('Debería devolver NaN cuando el número es negativo', () => {
        const result = squareRoot(-1);
        expect(result).toBe(NaN);
      });
  
      // Agrega más pruebas para cubrir diferentes casos y situaciones posibles
    });
  
    describe('Función logarithm', () => {
      test('Debería devolver el logaritmo de un número en una base válida', () => {
        const result = logarithm(100, 10);
        expect(result).toBeCloseTo(2); // Utilizamos toBeCloseTo() para comparar valores decimales
      });
  
      test('Debería devolver NaN cuando alguno de los valores es inválido', () => {
        const result1 = logarithm(-1, 10);
        const result2 = logarithm(100, 1);
        const result3 = logarithm(100, 0);
        expect(result1).toBe(NaN);
        expect(result2).toBe(NaN);
        expect(result3).toBe(NaN);
      });
  
      // Agrega más pruebas para cubrir diferentes casos y situaciones posibles
    });
    // Prueba para verificar si el número es positivo
    test('Debería devolver "El número es positivo" cuando se proporciona un número mayor a 0', () => {
      const result = checkNumber(5);
      expect(result).toBe("El número es positivo");
    });
  
    // Prueba para verificar si el número es negativo
    test('Debería devolver "El número es negativo" cuando se proporciona un número menor a 0', () => {
      const result = checkNumber(-2);
      expect(result).toBe("El número es negativo");
    });
  
    // Prueba para verificar si el número es cero
    test('Debería devolver "El número es cero" cuando se proporciona el número 0', () => {
      const result = checkNumber(0);
      expect(result).toBe("El número es cero");
    });