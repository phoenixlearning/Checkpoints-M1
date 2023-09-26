// Importa las funciones desde el archivo de ejercicios
const {
  esPrimo1,
  calcularMCD2,
  numeroAleatorio3,
  contarPalabras4,
  invertirCadena5,
  encontrarNumeroMayor6,
  eliminarDuplicados7,
  ordenarAscendente8,
  sumaDigitos9,
  esPalindromo10,
} = require("../CheckPoint-05-II.js"); // Asegúrate de ajustar la ruta según la ubicación de tu archivo de ejercicios

// Prueba 1: Verificar esPrimo1
test("Prueba: esPrimo1(7)", () => {
  expect(esPrimo1(7)).toBe(true);
});

// Prueba 2: Verificar calcularMCD2
test("Prueba: calcularMCD2(24, 36)", () => {
  expect(calcularMCD2(24, 36)).toBe(12);
});

// Prueba 3: Verificar numeroAleatorio3 en el rango [1, 10]
test("Prueba: numeroAleatorio3(1, 10)", () => {
  const resultado = numeroAleatorio3(1, 10);
  expect(resultado).toBeGreaterThanOrEqual(1);
  expect(resultado).toBeLessThanOrEqual(10);
});

// Prueba 4: Verificar contarPalabras4
test('Prueba: contarPalabras4("Hola Mundo")', () => {
  expect(contarPalabras4("Hola Mundo")).toBe(2);
});

// Prueba 5: Verificar invertirCadena5
test('Prueba: invertirCadena5("JavaScript")', () => {
  expect(invertirCadena5("JavaScript")).toBe("tpircSavaJ");
});

// Prueba 6: Verificar encontrarNumeroMayor6
test("Prueba: encontrarNumeroMayor6([5, 8, 2, 10, 3])", () => {
  expect(encontrarNumeroMayor6([5, 8, 2, 10, 3])).toBe(10);
});

// Prueba 7: Verificar eliminarDuplicados7
test("Prueba: eliminarDuplicados7([1, 2, 2, 3, 4, 4, 5])", () => {
  expect(eliminarDuplicados7([1, 2, 2, 3, 4, 4, 5])).toEqual([1, 2, 3, 4, 5]);
});

// Prueba 8: Verificar ordenarAscendente8
test("Prueba: ordenarAscendente8([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5])", () => {
  expect(ordenarAscendente8([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5])).toEqual([
    1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9,
  ]);
});

// Prueba 9: Verificar sumaDigitos9
test("Prueba: sumaDigitos9(12345)", () => {
  expect(sumaDigitos9(12345)).toBe(15);
});

// Prueba 10: Verificar esPalindromo10
test('Prueba: esPalindromo10("Anita lava la tina")', () => {
  expect(esPalindromo10("Anita lava la tina")).toBe(true);
});
