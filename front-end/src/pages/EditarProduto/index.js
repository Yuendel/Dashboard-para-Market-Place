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
import { Alert } from '@material-ui/lab';
import Loading from "../../components/Loading";



export default function CriarProduto() {
    const classes = useStyles();
    const history = useHistory();
    const { user, token } = useAuth();
    const { register, handleSubmit } = useForm();
    const [produto, setProduto] = useState([]);
    const { id } = useParams();
    const [carregando, setCarregando] = useState(false);
    const [erro, setErro] = useState('');

    useEffect(() => {
        buscarProduto();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    async function buscarProduto() {
        setCarregando(true);
        setErro(``);
        try {
            const { dados, ok } = await get(`produtos/${id}`, token)


            if (!ok) {
                setErro(dados);
                setCarregando(false);
                return;
            }
            setProduto(dados);
            setCarregando(false);
        } catch (error) {
            setErro('Erro:' + error.message);
            setCarregando(false);
        }
    }

    async function onSubmit(data) {
        setCarregando(true);
        setErro(``);
        try {
            const { dados, ok } = await put(`produtos/${id}`, data, token);

            if (!ok) {
                setErro(dados);
                setCarregando(false);
                return;
            }

            history.push('/produtos');

        } catch (error) {
            setErro('Erro:' + error.message);
            setCarregando(false);
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
                    {erro && <Alert severity="error" className='erro'>{erro}</Alert>}

                    {carregando && <Loading open={carregando} />}

                </form>

            </div>
        </div>
    );
}