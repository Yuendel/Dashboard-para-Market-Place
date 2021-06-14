const express = require('express');
const usuarios = require('./controladores/usuarios');
const login = require('./controladores/login')
const rotas = express();

//login
rotas.post('/login', login.login);

//usuarios
rotas.post('/cadastro', usuarios.cadastrarUsuario);

module.exports = rotas;