// Importa las funciones que deseas probar desde tu archivo de ejercicios
const {
  nombre,
  edad,
  esEstudiante,
  num1,
  num2,
  mensaje,
  valorNulo,
  numeroIndefinido,
  frutas,
  persona,
} = require("../CheckPoint-0I.js");

// Reemplaza 'tuejercicio.js' con el nombre de tu archivo de ejercicios

// Ejemplo de prueba para el primer ejercicio
test('Prueba: Declarar una variable "nombre"', () => {
  const nombre = "TuNombre"; // Asigna cualquier cadena que desees aquí
  expect(typeof nombre).toBe("string");
});

// Escribe pruebas similares para los otros ejercicios aquí

test('Prueba: Declarar una variable "edad"', () => {
  const edad = 25; // Asigna cualquier número que desees aquí
  expect(typeof edad).toBe("number");
});

test('Prueba: Declarar una variable "esEstudiante"', () => {
  const esEstudiante = true; // Asigna cualquier valor booleano que desees aquí
  expect(typeof esEstudiante).toBe("boolean");
});

test('Prueba: Declarar una variable "num1" como número decimal', () => {
  const num1 = 3.14; // Asigna cualquier número decimal que desees aquí
  expect(typeof num1).toBe("number");
  expect(Number.isInteger(num1)).toBe(false);
});

test('Prueba: Declarar una variable "num2" como número entero', () => {
  const num2 = 42; // Asigna cualquier número entero que desees aquí
  expect(typeof num2).toBe("number");
  expect(Number.isInteger(num2)).toBe(true);
});

test('Prueba: Declarar una variable "mensaje" con cualquier cadena', () => {
  const mensaje = "Hola, ¿cómo estás?"; // Asigna cualquier cadena que desees aquí
  expect(typeof mensaje).toBe("string");
});

test('Prueba: Declarar una variable "valorNulo"', () => {
  expect(valorNulo).toBeNull();
});

test('Prueba: Declarar una variable "numeroIndefinido"', () => {
  expect(numeroIndefinido).toBeUndefined();
});

test('Prueba: Declarar una variable "frutas" con cualquier tipo de string', () => {
  const frutas = ["manzana", "banana", "uva"]; // Puedes modificar el contenido del array aquí
  expect(Array.isArray(frutas)).toBe(true); // Verifica que sea un array
  expect(frutas.every((item) => typeof item === "string")).toBe(true); // Verifica que todos los elementos sean cadenas
});

test('Prueba: Declarar una variable "persona"', () => {
  expect(persona).toEqual(
    expect.objectContaining({
      nombre: expect.any(String),
      edad: expect.any(Number),
      ciudad: expect.any(String),
    })
  );
});
