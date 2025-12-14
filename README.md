# 🐾 Veterinaria JS

Proyecto desarrollado como parte de un desafío académico para practicar el uso de Node.js, módulos y manejo de archivos con File System.

---

## 📌 Descripción

Esta aplicación permite registrar y leer citas de atención veterinaria desde la terminal, utilizando Node.js.  
Las citas se almacenan en un archivo JSON.

---

## 📂 Estructura del proyecto

├── index.js
├── operaciones.js
└── citas.json

## ▶️ Cómo ejecutar el proyecto

### Requisitos
- Tener instalado **Node.js**
- Clonar o descargar este repositorio

---

### 1️⃣ Registrar una cita

Desde la terminal, en la carpeta del proyecto, ejecutar:

bash
node index.js registrar Benito "2 años" perro blanco vomitos

----

Los datos corresponden a:

Nombre del animal
Edad
Tipo de animal
Color
Enfermedad

La cita quedará guardada en el archivo citas.json.

2️⃣ Leer las citas registradas:

node index.js leer


----


