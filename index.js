const express = require('express');
const path = require('path');
const cookieParser = require("cookie-parser")

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'src')));
app.use(require('./helpers/mongo'))

app.use("/vinhos", require("./control/VinhoAPI.js"));

app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname + "/src/index.html"));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname + "/src/login.html"));
});

app.get('/registro', (req, res) => {
  res.sendFile(path.join(__dirname + "/src/cadastro.html"));
});




// Inicia o servidor
app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});
