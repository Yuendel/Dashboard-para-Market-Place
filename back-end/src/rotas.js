const express = require('express');
const usuarios = require('./controladores/usuarios');
const login = require('./controladores/login')
const verificaLogin = require('./filtros/verificaLogin');

const rotas = express();

//login
rotas.post('/login', login.login);

//usuarios
rotas.post('/cadastro', usuarios.cadastrarUsuario);

rotas.use(verificaLogin);
rotas.get('/perfil', usuarios.obterPerfil);
rotas.put('/perfil', usuarios.modificarPerfil);
module.exports = rotas;