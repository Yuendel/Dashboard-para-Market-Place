const conexao = require('../conexao');
const securePassword = require('secure-password');


const pwd = securePassword();


const cadastrarUsuario = async (req, res) => {
    const { nome, nome_loja, email, senha } = req.body;

    if (!nome) {
        return res.status(400).json("O campo Nome é obrigatório.");
    }

    if (!nome_loja) {
        return res.status(400).json("O campo do Nome da sua loja é obrigatório.");
    }

    if (!email) {
        return res.status(400).json("O campo Email é obrigatório.");
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

const obterPerfil = async (req, res) => {
    const { usuario } = req;

    try {
        return res.status(200).json({ usuario });

    } catch (error) {
        res.status(400).json(error.message);
    }
}

const modificarPerfil = async (req, res) => {
    const { usuario } = req;
    const { nome, nome_loja, email, senha } = req.body;
    try {
        if (nome) {
            const query = 'update usuarios set nome = $1 where id = $2';
            const usuarioAtualizado = await conexao.query(query, [nome, usuario.id]);

            if (usuarioAtualizado.rowCount === 0) {
                return res.status(400).json('Não foi possível atualizar o usuario');
            }
        }
        if (nome_loja) {
            const query = 'update usuarios set nome_loja = $1 where id = $2';
            const usuarioAtualizado = await conexao.query(query, [nome_loja, usuario.id]);
            if (usuarioAtualizado.rowCount === 0) {
                return res.status(400).json('Não foi possível atualizar o usuario');
            }
        }
        if (email) {
            const verificaEmail = 'select * from usuarios where email = $1';
            const { rowCount: usuarios } = await conexao.query(verificaEmail, [email]);

            if (usuarios > 0) {
                return res.status(400).json('Email ja cadastrado!')
            }

            const query = 'update usuarios set email = $1 where id = $2';
            const usuarioAtualizado = await conexao.query(query, [email, usuario.id]);

            if (usuarioAtualizado.rowCount === 0) {
                return res.status(400).json('Não foi possível atualizar o usuario');
            }
        }
        if (senha) {
            const hash = (await pwd.hash(Buffer.from(senha))).toString("Hex");

            const query = 'update usuarios set senha = $1 where id = $2';
            const usuarioAtualizado = await conexao.query(query, [hash, usuario.id]);


            if (usuarioAtualizado.rowCount === 0) {
                return res.status(400).json('Não foi possível atualizar o usuario');
            }
        }

        res.status(200).json('Dados atualizados com sucesso')
    } catch (error) {
        res.status(400).json(error.message);
    }

}

module.exports = { cadastrarUsuario, obterPerfil, modificarPerfil };