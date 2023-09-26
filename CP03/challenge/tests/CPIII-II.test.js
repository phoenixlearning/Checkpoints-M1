// Importa las variables desde el archivo de ejercicios
const {
  resultado1,
  resultado2,
  resultado3,
  suma,
  producto,
  resultado6,
  indiceBanana,
  sumaNumeros,
  resultado9,
  potencia,
} = require("../CheckPoint-03-II.js"); // Asegúrate de ajustar la ruta según la ubicación de tu archivo de ejercicios

// Prueba 1: Verificar resultado1
test("Prueba: Resultado 1", () => {
  expect(resultado1).toBe("1 2 3 4 5 ");
});

// Prueba 2: Verificar resultado2
test("Prueba: Resultado 2", () => {
  expect(resultado2).toBe("2 4 6 8 10 ");
});

// Prueba 3: Verificar resultado3
test("Prueba: Resultado 3", () => {
  expect(resultado3).toBe("1 3 5 7 9 ");
});

// Prueba 4: Verificar suma
test("Prueba: Suma", () => {
  expect(suma).toBe(15);
});

// Prueba 5: Verificar producto
test("Prueba: Producto", () => {
  expect(producto).toBe(120);
});

// Prueba 6: Verificar resultado6
test("Prueba: Resultado 6", () => {
  expect(resultado6).toBe("manzana banana uva pera naranja ");
});

// Prueba 7: Verificar indiceBanana
test('Prueba: Índice de "banana"', () => {
  expect(indiceBanana).toBe(1);
});

// Prueba 8: Verificar sumaNumeros
test("Prueba: Suma de números", () => {
  expect(sumaNumeros).toBe(45);
});

// Prueba 9: Verificar resultado9
test("Prueba: Resultado 9", () => {
  expect(resultado9).toBe("10 9 8 7 6 5 4 3 2 1 ");
});

// Prueba 10: Verificar potencia
test("Prueba: Potencia", () => {
  expect(potencia).toBe(16); // Cambia el valor esperado según el valor de n
});
