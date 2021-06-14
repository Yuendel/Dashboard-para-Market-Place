const conexao = require('../conexao');
const securePassword = require('secure-password');
const jwt = require('jsonwebtoken');
const jwtSecret = require("../secret");

const pwd = securePassword();

const login = async (req, res) => {
    const { email, senha } = req.body;

    if (!email) {
        return res.status(400).json("O campo email é obrigatório.");
    }

    if (!senha) {
        return res.status(400).json("O campo Senha é obrigatório.");
    }

    try {

        const verificaEmail = 'select * from usuarios where email = $1';
        const { rows, rowCount: usuarios } = await conexao.query(verificaEmail, [email]);

        if (usuarios === 0) {
            return res.status(404).json('Usuario não encontrado');
        }

        const usuario = rows[0];

        const result = await pwd.verify(Buffer.from(senha), Buffer.from(usuario.senha, "hex"));

        switch (result) {
            case securePassword.INVALID_UNRECOGNIZED_HASH:
            case securePassword.INVALID:
                return res.status(404).json('Email ou senha incorretas.');
            case securePassword.VALID:
                break;
            case securePassword.VALID_NEEDS_REHASH:
                try {
                    const hash = (await pwd.hash(Buffer.from(senha))).toString("Hex");
                    const query = 'update usuarios set senha = $1 where email = $2';
                    await conexao.query(query, [hash, email]);
                } catch {
                }
                break;
        }

        const token = jwt.sign({ id: usuario.id }, jwtSecret, { expiresIn: '24h' });
        const { senha: senhaProtegida, ...dadosUsuario } = usuario;

        return res.status(200).json({ usuario: dadosUsuario, token });

    } catch (error) {
        return res.status(400).json(error.message);
    }
}

module.exports = { login };