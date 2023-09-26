// Importa las funciones desde el archivo de ejercicios
const {
  suma1,
  resta2,
  multiplica3,
  divide4,
  areaTriangulo5,
  areaCirculo6,
  esPar7,
  determinarSigno8,
  concatenar9,
  factorial10,
} = require("../CheckPoint-05-I.js"); // Asegúrate de ajustar la ruta según la ubicación de tu archivo de ejercicios

// Prueba 1: Verificar suma1
test("Prueba: Suma 1 + 2", () => {
  expect(suma1(1, 2)).toBe(3);
});

// Prueba 2: Verificar resta2
test("Prueba: Resta 5 - 3", () => {
  expect(resta2(5, 3)).toBe(2);
});

// Prueba 3: Verificar multiplica3
test("Prueba: Multiplica 4 * 7", () => {
  expect(multiplica3(4, 7)).toBe(28);
});

// Prueba 4: Verificar divide4
test("Prueba: Divide 10 / 2", () => {
  expect(divide4(10, 2)).toBe(5);
});

// Prueba 5: Verificar área de triángulo
test("Prueba: Área de triángulo base=6 altura=8", () => {
  expect(areaTriangulo5(6, 8)).toBe(24);
});

// Prueba 6: Verificar área de círculo
test("Prueba: Área de círculo radio=5", () => {
  expect(areaCirculo6(5)).toBeCloseTo(78.54, 2); // Aproximadamente 78.54
});

// Prueba 7: Verificar esPar7
test("Prueba: esPar7(4)", () => {
  expect(esPar7(4)).toBe(true);
});

// Prueba 8: Verificar determinarSigno8
test("Prueba: determinarSigno8(-7)", () => {
  expect(determinarSigno8(-7)).toBe("Negativo");
});

// Prueba 9: Verificar concatenar9
test('Prueba: concatenar9("Hola", "Mundo")', () => {
  expect(concatenar9("Hola", "Mundo")).toBe("Hola Mundo");
});

// Prueba 10: Verificar factorial10
test("Prueba: factorial10(5)", () => {
  expect(factorial10(5)).toBe(120);
});
