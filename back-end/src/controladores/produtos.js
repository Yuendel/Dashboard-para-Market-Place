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
        const query = 'select * from produtos where usuario_id = $1 ORDER BY categoria,preco ASC'
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
        const query = 'select * from produtos where id = $1 '
        const { rowCount, rows: produto } = await conexao.query(query, [idProduto]);

        if (rowCount === 0) {
            return res.status(404).json('Produto informado não existe')

        }

        if (produto[0].usuario_id !== id) {
            return res.status(404).json('Produto informado não pertence ao usuario logado!')
        }

        res.status(200).json(produto);
    } catch (error) {
        res.status(400).json(error.message);
    }

}

const modificarProduto = async (req, res) => {
    const { id } = req.usuario;
    const { idProduto } = req.params;
    const { nome, estoque, categoria, preco, descricao, imagem } = req.body;

    try {
        const query = 'select * from produtos where id = $1 '
        const { rowCount, rows: produto } = await conexao.query(query, [idProduto]);

        if (rowCount === 0) {
            return res.status(404).json('Produto informado não existe')

        }

        if (produto[0].usuario_id !== id) {
            return res.status(404).json('Produto informado não pertence ao usuario logado!')
        }

        if (nome) {
            const query = 'update produtos set nome = $1 where id = $2';
            const produtoAtualizado = await conexao.query(query, [nome, idProduto]);

            if (produtoAtualizado.rowCount === 0) {
                return res.status(400).json('Não foi possível atualizar o produto');
            }
        }

        if (estoque) {
            const query = 'update produtos set estoque = $1 where id = $2';
            const produtoAtualizado = await conexao.query(query, [estoque, idProduto]);

            if (produtoAtualizado.rowCount === 0) {
                return res.status(400).json('Não foi possível atualizar o produto');
            }
        }

        if (categoria) {
            const query = 'update produtos set categoria = $1 where id = $2';
            const produtoAtualizado = await conexao.query(query, [categoria, idProduto]);

            if (produtoAtualizado.rowCount === 0) {
                return res.status(400).json('Não foi possível atualizar o produto');
            }
        }

        if (preco) {
            const query = 'update produtos set preco = $1 where id = $2';
            const produtoAtualizado = await conexao.query(query, [preco, idProduto]);

            if (produtoAtualizado.rowCount === 0) {
                return res.status(400).json('Não foi possível atualizar o produto');
            }
        }

        if (descricao) {
            const query = 'update produtos set descricao = $1 where id = $2';
            const produtoAtualizado = await conexao.query(query, [descricao, idProduto]);

            if (produtoAtualizado.rowCount === 0) {
                return res.status(400).json('Não foi possível atualizar o produto');
            }
        }

        if (imagem) {
            const query = 'update produtos set imagem = $1 where id = $2';
            const produtoAtualizado = await conexao.query(query, [imagem, idProduto]);

            if (produtoAtualizado.rowCount === 0) {
                return res.status(400).json('Não foi possível atualizar o produto');
            }
        }

        return res.status(200).json('Produto atualizado com sucesso');
    } catch (error) {
        res.status(400).json(error.message);
    }

}

const deletarProduto = async (req, res) => {
    const { id } = req.usuario;
    const { idProduto } = req.params;

    try {
        const query = 'select * from produtos where id = $1 '
        const { rowCount, rows: produto } = await conexao.query(query, [idProduto]);

        if (rowCount === 0) {
            return res.status(404).json('Produto informado não existe')

        }

        if (produto[0].usuario_id !== id) {
            return res.status(404).json('Produto informado não pertence ao usuario logado!')
        }

        const query2 = 'delete from produtos where id = $1';
        const produtoExcluido = await conexao.query(query2, [idProduto]);

        if (produtoExcluido.rowCount === 0) {
            return res.status(404).json('Não foi possível excluir o produto');
        }

        return res.status(200).json('Produto foi excluido com sucesso.');
    } catch (error) {
        res.status(400).json(error.message);
    }
}

module.exports = { cadastrarProduto, listarProdutos, obterProduto, modificarProduto, deletarProduto };