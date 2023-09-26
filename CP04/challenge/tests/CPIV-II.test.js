// Importa las variables desde el archivo de ejercicios
const {
  resultado1,
  resultado2,
  resultado3,
  resultado4,
  resultado5,
  resultado6,
  resultado7,
  resultado8,
  resultado9,
  resultado10,
} = require("../CheckPoint-04-II.js"); // Asegúrate de ajustar la ruta según la ubicación de tu archivo de ejercicios

// Prueba 1: Verificar resultado1
test("Prueba: Resultado 1", () => {
  expect(resultado1).toBe("B");
});

// Prueba 2: Verificar resultado2
test("Prueba: Resultado 2", () => {
  expect(resultado2).toBe("Intermedio");
});

// Prueba 3: Verificar resultado3
test("Prueba: Resultado 3", () => {
  expect(resultado3).toBe(40);
});

// Prueba 4: Verificar resultado4
test("Prueba: Resultado 4", () => {
  expect(resultado4).toBe("Película de aventura");
});

// Prueba 5: Verificar resultado5
test("Prueba: Resultado 5", () => {
  expect(resultado5).toBe("Adulto Mayor");
});

// Prueba 6: Verificar resultado6
test("Prueba: Resultado 6", () => {
  expect(resultado6).toBe("Avanzado");
});

// Prueba 7: Verificar resultado7
test("Prueba: Resultado 7", () => {
  expect(resultado7).toBe("Primavera");
});

// Prueba 8: Verificar resultado8
test("Prueba: Resultado 8", () => {
  expect(resultado8).toBe("Imagen JPEG");
});

// Prueba 9: Verificar resultado9
test("Prueba: Resultado 9", () => {
  expect(resultado9).toBe("Kiwi");
});

// Prueba 10: Verificar resultado10
test("Prueba: Resultado 10", () => {
  expect(resultado10).toBe("Tarde");
});
