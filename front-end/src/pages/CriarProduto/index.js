import Navbar from "../../components/NavBar";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import { NavLink, useHistory } from "react-router-dom";
import useStyles from "./styles";
import useAuth from "../../hook/useAuth";
import { useForm } from "react-hook-form";
import React, { useState } from 'react';

import { postAutenticado } from '../../services/ApiClient';

export default function CriarProduto() {
    const classes = useStyles();
    const history = useHistory();
    const { user, token } = useAuth();
    const { register, handleSubmit } = useForm();
    const [carregando, setCarregando] = useState(false);


    async function onSubmit(data) {
        setCarregando(true);
        console.log(data);
        console.log(carregando);
        try {
            const { dados, ok } = await postAutenticado('produtos', data, token);

            if (!ok) {
                console.log(dados);
                return;
            }

            history.push('/produtos');

        } catch (error) {
            console.log('Erro: ' + error.message);
        }
        setCarregando(false);
    }

    return (
        <div className={classes.body}>
            <Navbar selecionado="storeSelected" />
            <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                <Typography variant="h3" component="h2" className={classes.nome}>
                    {user.nome_loja}
                </Typography>
                <Typography variant="h4" component="h2" className={classes.titulo}>
                    Adicionar produto
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

                    <Button variant="contained" className={classes.blue} type='submit'>Adicionar Produto</Button>
                </div>
            </form>
        </div>
    );
}