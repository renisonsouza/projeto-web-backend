const express = require('express');
const path = require('path');

const app = express();

// Define o caminho para a pasta de arquivos estáticos
app.use(express.static(path.join(__dirname, 'src')));

// Rota para a página HTML
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname + "/src/login.html"));
});

// Rota para cadastrar um usuário

// Rota para criar um novo administrador

// Rota para criar um novo administrador (restrita aos administradores)

// Rota para excluir um usuário não administrador 

// Rota de login para obter um token JWT

// Rota para atualizar os dados do usuário


// Inicia o servidor
app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});
