const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

let usuarios = [];

app.post("/registro", (req, res) => {
  const { usuario, password } = req.body;

  if (!usuario || !password) {
    return res.status(400).json({ mensaje: "Datos incompletos" });
  }

  usuarios.push({ usuario, password });

  res.json({ mensaje: "Usuario registrado correctamente" });
});

app.post("/login", (req, res) => {
  const { usuario, password } = req.body;

  const encontrado = usuarios.find(
    (u) => u.usuario === usuario && u.password === password
  );

  if (encontrado) {
    res.json({ mensaje: "Autenticación satisfactoria" });
  } else {
    res.status(401).json({ mensaje: "Error en la autenticación" });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});