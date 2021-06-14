const conexao = require('../conexao');

const cadastrarProduto = async (req, res) => {
    const { id } = req.usuario;
    const { nome, estoque, categoria, preco, descricao, imagem } = req.body;

    if (!nome) {
        return res.status(400).json("O campo nome é obrigatório.");
    }

    if (!estoque) {
        return res.status(400).json("O campo estoque é obrigatório.");
    }

    if (!preco) {
        return res.status(400).json("O campo preco é obrigatório.");
    }

    if (!descricao) {
        return res.status(400).json("O campo descricao é obrigatório.");
    }

    try {
        const query = 'insert into produtos (usuario_id,nome,estoque,categoria,preco,descricao,imagem) values ($1,$2,$3,$4,$5,$6,$7)';
        const produto = await conexao.query(query, [id, nome, estoque, categoria, preco, descricao, imagem]);

        if (produto.rowCount === 0) {
            return res.status(400).json('Não foi possivel cadastrar o produto');
        }
        return res.status(200).json('Produto cadastrado com sucesso.')
    } catch (error) {
        res.status(400).json(error.message);
    }
}

const listarProdutos = async (req, res) => {
    const { id } = req.usuario;

    try {
        const query = 'select * from produtos where usuario_id = $1 ORDER BY categoria'
        const { rows: produtos } = await conexao.query(query, [id]);

        res.status(200).json(produtos);
    } catch (error) {
        res.status(400).json(error.message);
    }
}

const obterProduto = async (req, res) => {
    const { id } = req.usuario;
    const { idProduto } = req.params;

    try {
        const query = 'select * from produtos where id = $1 AND usuario_id = $2 '
        const { rowCount, rows: produto } = await conexao.query(query, [idProduto, id]);

        if (rowCount === 0) {
            res.status(404).json('Produto informado não existe')

        }

        res.status(200).json(produto);
    } catch (error) {
        res.status(400).json(error.message);
    }

}

const modificarProduto = async (req, res) => {

}


module.exports = { cadastrarProduto, listarProdutos, obterProduto, modificarProduto };