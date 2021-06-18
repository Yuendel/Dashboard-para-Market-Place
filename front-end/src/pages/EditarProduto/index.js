import Navbar from "../../components/NavBar";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import { NavLink, useHistory, useParams } from "react-router-dom";
import CardMedia from "@material-ui/core/CardMedia";
import useStyles from "./styles";
import useAuth from "../../hook/useAuth";
import { useForm } from "react-hook-form";
import React, { useState, useEffect } from 'react';
import { get, put } from '../../services/ApiClient';




export default function CriarProduto() {
    const classes = useStyles();
    const history = useHistory();
    const { user, token } = useAuth();
    const { register, handleSubmit } = useForm();
    const [produto, setProduto] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        buscarProduto();
        console.log(produto)
    }, []);

    async function buscarProduto() {

        try {
            const { dados, ok } = await get(`produtos/${id}`, token)


            if (!ok) {
                console.log(dados);
            }
            setProduto(dados);

        } catch (error) {
            console.log(error.message)
        }
    }

    async function onSubmit(data) {
        try {
            const { dados, ok } = await put(`produtos/${id}`, data, token);

            if (!ok) {
                console.log(dados);
                return;
            }

            history.push('/produtos');

        } catch (error) {
            console.log('Erro: ' + error.message);
        }
    }

    return (
        <div className={classes.body}>
            <Navbar selecionado="storeSelected" />
            <div className={classes.flex}>
                <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <Typography variant="h3" component="h2" className={classes.nome}>
                            {user.nome_loja}
                        </Typography>
                        <Typography variant="h4" component="h2" className={classes.titulo}>
                            Editar Produto
                        </Typography>
                        <div className={classes.adicionarProduto}>
                            <TextField
                                className={classes.input}
                                id="standard-basic"
                                label="Nome do produto"
                                {...register("nome")}
                            />
                            <div className={(classes.input, classes.listaInputs)}>
                                <TextField
                                    className={classes.inputNumber}
                                    id="preco"
                                    label="Preço"
                                    {...register("preco")}
                                    type="number"
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">R$</InputAdornment>
                                        ),
                                    }}
                                />
                                <TextField
                                    className={classes.inputNumber}
                                    id="estoque"
                                    label="Estoque"
                                    {...register("estoque")}
                                    type="number"
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">Un</InputAdornment>
                                        ),
                                    }}
                                />
                            </div>
                            <TextField
                                className={classes.input}
                                id="standard-basic"
                                label="Descrição do produto"
                                {...register("descricao")}
                            />
                            <TextField
                                className={classes.input}
                                id="standard-basic"
                                type="url"
                                label="Imagem"
                                {...register("imagem")}
                            />
                        </div>
                        <Divider />
                        <div className={classes.botoes}>
                            <NavLink to="/produtos">CANCELAR</NavLink>

                            <Button variant="contained" className={classes.blue} type='submit'>Salvar Alterações</Button>
                        </div>
                    </div>
                    <CardMedia
                        className={classes.imagem}
                        component='img'
                        image={produto.imagem}
                        title={produto.descricao}
                    />


                </form>

            </div>
        </div>
    );
}