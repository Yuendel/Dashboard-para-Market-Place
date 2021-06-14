const conexao = require('../conexao');
const securePassword = require('secure-password');

const pwd = securePassword();


const cadastrarUsuario = async (req, res) => {
    const { nome, nome_loja, email, senha } = req.body;

    if (!nome) {
        return res.status(400).json("O campo nome é obrigatório.");
    }

    if (!nome_loja) {
        return res.status(400).json("O campo do nome da sua loja é obrigatório.");
    }

    if (!email) {
        return res.status(400).json("O campo email é obrigatório.");
    }

    if (!senha) {
        return res.status(400).json("O campo Senha é obrigatório.");
    }

    try {
        const verificaEmail = 'select * from usuarios where email = $1';
        const { rowCount: usuarios } = await conexao.query(verificaEmail, [email]);

        if (usuarios > 0) {
            return res.status(404).json('Email ja cadastrado!')
        }

        const hash = (await pwd.hash(Buffer.from(senha))).toString("Hex");

        const query = 'insert into usuarios (nome,nome_loja,email,senha) values ($1, $2,$3,$4)';
        const usuario = await conexao.query(query, [nome, nome_loja, email, hash]);

        if (usuario.rowCount === 0) {
            return res.status(400).json('Não foi possivel cadastrar o usuario');
        }

        return res.status(200).json('Usuario cadastrado com sucesso.')
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

module.exports = { cadastrarUsuario };