const conexao = require('../conexao');
const jwt = require('jsonwebtoken');
const jwtSecret = require("../secret");

const verificaLogin = async (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(404).json('Token não informado');
    }

    try {
        const token = authorization.replace('Bearer', '').trim();

        const { id } = jwt.verify(token, jwtSecret);

        const query = 'select * from usuarios where id = $1';
        const { rows, rowCount } = await conexao.query(query, [id]);

        if (rowCount === 0) {
            return res.status(404).json('Usuario não encontrado');
        }

        const { senha, ...usuario } = rows[0];

        req.usuario = usuario;

        next();

    } catch (error) {
        res.status(400).json(error.message);
    }
}


module.exports = verificaLogin;