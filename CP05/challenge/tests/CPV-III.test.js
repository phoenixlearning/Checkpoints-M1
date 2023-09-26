// Importa las funciones desde el archivo de ejercicios
const {
  fibonacci1,
  estadisticas2,
  lanzarDado3,
  contieneTodasLasVocales4,
  subcadenaSinRepetir5,
  sumaPrimosMenoresOIguales6,
  formasDeSubirEscalera7,
  esCuadradoPerfecto8,
  encontrarFibonacciConNDigitos9,
  sumaDigitosPotenciaDeDos10,
} = require("../CheckPoint-05-III.js"); // Asegúrate de ajustar la ruta según la ubicación de tu archivo de ejercicios

// Prueba 1: Verificar fibonacci1
test("Prueba: fibonacci1(6)", () => {
  expect(fibonacci1(6)).toBe(8);
});

// Prueba 2: Verificar estadisticas2
test("Prueba: estadisticas2([5, 10, 15, 20])", () => {
  expect(estadisticas2([5, 10, 15, 20])).toEqual({
    minimo: 5,
    maximo: 20,
    suma: 50,
    promedio: 12.5,
  });
});

// Prueba 3: Verificar lanzarDado3
test("Prueba: lanzarDado3(5)", () => {
  const resultados = lanzarDado3(5);
  expect(resultados).toHaveLength(5);
  expect(resultados.every((numero) => numero >= 1 && numero <= 6)).toBe(true);
});

// Prueba 4: Verificar contieneTodasLasVocales4
test('Prueba: contieneTodasLasVocales4("AeIoU")', () => {
  expect(contieneTodasLasVocales4("AeIoU")).toBe(true);
});

// Prueba 5: Verificar subcadenaSinRepetir5
test('Prueba: subcadenaSinRepetir5("abcabcbb")', () => {
  expect(subcadenaSinRepetir5("abcabcbb")).toBe("abc");
});

// Prueba 6: Verificar sumaPrimosMenoresOIguales6
test("Prueba: sumaPrimosMenoresOIguales6(10)", () => {
  expect(sumaPrimosMenoresOIguales6(10)).toBe(17);
});

// Prueba 7: Verificar formasDeSubirEscalera7
test("Prueba: formasDeSubirEscalera7(4)", () => {
  expect(formasDeSubirEscalera7(4)).toBe(5);
});

// Prueba 8: Verificar esCuadradoPerfecto8
test("Prueba: esCuadradoPerfecto8(25)", () => {
  expect(esCuadradoPerfecto8(25)).toBe(true);
});

// Prueba 9: Verificar encontrarFibonacciConNDigitos9
test("Prueba: encontrarFibonacciConNDigitos9(3)", () => {
  expect(encontrarFibonacciConNDigitos9(3)).toBe(12);
});

// Prueba 10: Verificar sumaDigitosPotenciaDeDos10
test("Prueba: sumaDigitosPotenciaDeDos10(1000)", () => {
  expect(sumaDigitosPotenciaDeDos10(1000)).toBe(1366);
});
