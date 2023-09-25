// Importa las variables desde el archivo de ejercicios
const {
  suma,
  resta,
  multiplicacion,
  division,
  modulo,
  contador1,
  contador2,
  concatenacion,
  esVerdadero,
  resultado,
} = require("../CheckPoint-02-I.js"); // Asegúrate de ajustar la ruta según la ubicación de tu archivo de ejercicios

// Prueba 1: Verificar la suma
test("Prueba: Suma", () => {
  expect(suma).toBe(15);
});

// Prueba 2: Verificar la resta
test("Prueba: Resta", () => {
  expect(resta).toBe(5);
});

// Prueba 3: Verificar la multiplicación
test("Prueba: Multiplicación", () => {
  expect(multiplicacion).toBe(50);
});

// Prueba 4: Verificar la división
test("Prueba: División", () => {
  expect(division).toBe(2);
});

// Prueba 5: Verificar el módulo
test("Prueba: Módulo", () => {
  expect(modulo).toBe(0);
});

// Prueba 6: Verificar el incremento
test("Prueba: Incremento", () => {
  expect(contador1).toBe(1);
});

// Prueba 7: Verificar el decremento
test("Prueba: Decremento", () => {
  expect(contador2).toBe(0);
});

// Prueba 8: Verificar la concatenación
test("Prueba: Concatenación", () => {
  expect(concatenacion).toBe("Hola, Mundo!");
});

// Prueba 9: Verificar la expresión booleana
test("Prueba: Expresión Booleana", () => {
  expect(esVerdadero).toBe(true);
});

// Prueba 10: Verificar el operador ternario
test("Prueba: Operador Ternario", () => {
  expect(resultado).toBe("Aprobado");
});
