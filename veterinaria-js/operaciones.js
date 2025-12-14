const fs = require("fs");

const registrar = (nombre, edad, tipo, color, enfermedad) => {
  // Leer citas actuales
  const citas = JSON.parse(fs.readFileSync("citas.json", "utf8"));

  // Nueva cita
  const nuevaCita = {
    nombre,
    edad,
    tipo,
    color,
    enfermedad
  };

  // Agregar y guardar
  citas.push(nuevaCita);
  fs.writeFileSync("citas.json", JSON.stringify(citas, null, 2));

  console.log("Cita registrada con éxito 🐾");
};

const leer = () => {
  const citas = JSON.parse(fs.readFileSync("citas.json", "utf8"));

  if (citas.length === 0) {
    console.log("No hay citas registradas.");
    return;
  }

  console.log("📋 Citas registradas:");
  citas.forEach((cita, index) => {
    console.log(`
Cita ${index + 1}:
Nombre: ${cita.nombre}
Edad: ${cita.edad}
Tipo: ${cita.tipo}
Color: ${cita.color}
Enfermedad: ${cita.enfermedad}
    `);
  });
};

module.exports = { registrar, leer };
