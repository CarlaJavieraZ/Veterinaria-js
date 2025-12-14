const { registrar, leer } = require("./operaciones");

// Capturar argumentos
const operacion = process.argv[2];
const nombre = process.argv[3];
const edad = process.argv[4];
const tipo = process.argv[5];
const color = process.argv[6];
const enfermedad = process.argv[7];

// Condiciones
if (operacion === "registrar") {
  registrar(nombre, edad, tipo, color, enfermedad);
}

if (operacion === "leer") {
  leer();
}
