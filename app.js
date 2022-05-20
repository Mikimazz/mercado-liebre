const express = require("express");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Estamos corriendo en el puerto " + PORT)
});

app.listen(3000, () => {
  console.log("Servidor corriendo en el puerto 3000");
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/home.html"));
});

app.get("/ofertas", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/ofertas.html"));
});

app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/register.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/login.html"));
});

app.use(express.static(path.join(__dirname, "public")));
