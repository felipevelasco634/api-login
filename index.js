// Importar Express
const express = require("express");
// Crear aplicación
const app = express();
// Puerto del servidor
const PORT = 3000;

// Middleware para recibir datos en JSON
app.use(express.json());

// Simulación de base de datos (usuarios en memoria)
let usuarios = [];

//REGISTRO DE USUARIO
//Recibe usuario y contraseña y los guarda
app.post("/registro", (req, res) => {
  const { usuario, password } = req.body;
  
  // Validar datos
  if (!usuario || !password) {
    return res.status(400).json({ mensaje: "Datos incompletos" });
  }
  // Guardar usuario
  usuarios.push({ usuario, password });

  res.json({ mensaje: "Usuario registrado correctamente" });
});

//LOGIN DE USUARIO
//Valida las credenciales
app.post("/login", (req, res) => {
  const { usuario, password } = req.body;

  // Buscar usuario
  const encontrado = usuarios.find(
    (u) => u.usuario === usuario && u.password === password
  );

  // Validar autenticación
  if (encontrado) {
    res.json({ mensaje: "Autenticación satisfactoria" });
  } else {
    res.status(401).json({ mensaje: "Error en la autenticación" });
  }
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});