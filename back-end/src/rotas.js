const express = require('express');
const usuarios = require('./controladores/usuarios');
const produtos = require('./controladores/produtos');
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
//produtos
rotas.post('/produtos', produtos.cadastrarProduto);
rotas.get('/produtos', produtos.listarProdutos);
rotas.get('/produtos/:idProduto', produtos.obterProduto);
rotas.put('/produtos/:idProduto', produtos.modificarProduto);
rotas.delete('/produtos/:idProduto', produtos.deletarProduto)

module.exports = rotas;