import React, { useState } from 'react';
import useAuth from '../../hook/useAuth';
import Navbar from "../../components/NavBar";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import useStyles from './styles'
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Divider from "@material-ui/core/Divider";
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import clsx from 'clsx';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Alert } from '@material-ui/lab';
import Loading from "../../components/Loading";

import { useForm } from 'react-hook-form';
import { NavLink, useHistory } from 'react-router-dom';
import { put } from '../../services/ApiClient';

function Cadastro() {
    const { user, token } = useAuth();
    const classes = useStyles();
    const { register, handleSubmit } = useForm();
    const history = useHistory();
    const [erro, setErro] = useState('');
    const [carregando, setCarregando] = useState(false);
    const [values, setValues] = React.useState({
        password: '',
        showPassword: false,
    });


    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };
    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };


    async function onSubmit(data) {
        setCarregando(true);
        setErro(``);

        if (data.senha) {
            if (values.password !== values.trypassword) {
                setErro('Senhas diferem');
                setCarregando(false);
                return;
            }
        }

        try {

            const { dados, ok } = await put('perfil', data, token);

            if (!ok) {
                setErro('Erro:' + dados);
                setCarregando(false);
                return;
            }
            setCarregando(false);
            history.push('/perfil');
        } catch (error) {
            setErro('Erro: ' + error.message);
            setCarregando(false);
        }
    }

    return (
        <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
            <Navbar selecionado="perfil" />
            <Typography variant="h3" component="h2" className={classes.titulo}>
                {user.nome_loja}
            </Typography>
            <Typography variant="h4" component="h2" className={classes.subtitulo}>
                Editar Perfil
            </Typography>

            <TextField id="standard-basic" label="Nome" type='name' value={values.name} {...register('nome')} />

            <TextField id="standard-basic" label="Nome da loja" type='name' value={values.nameShop} {...register('nome_loja')} />

            <TextField id="standard-basic" label="E-mail" type='email' value={values.email} {...register('email')} />

            <FormControl className={clsx(classes.margin, classes.textField)}>
                <InputLabel htmlFor="standard-adornment-password">Senha</InputLabel>
                <Input
                    className={classes.senha}
                    id="standard-adornment-password"
                    {...register('senha')}
                    type={values.showPassword ? 'text' : 'password'}
                    value={values.password}
                    onChange={handleChange('password')}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                            >
                                {values.showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                    }
                />
            </FormControl>

            <FormControl className={clsx(classes.margin, classes.textField)}>
                <InputLabel htmlFor="standard-adornment-password">Repita a senha</InputLabel>
                <Input
                    className={classes.senha}
                    id="standard-adornment-password"
                    type={values.showPassword ? 'text' : 'password'}
                    value={values.trypassword}
                    onChange={handleChange('trypassword')}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                            >
                                {values.showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                    }
                />
            </FormControl>
            <Divider />
            {erro && <Alert severity="error" className='erro'>{erro}</Alert>}
            {carregando && <Loading open={carregando} />}
            <div className={classes.botoes}>
                <NavLink to="/produtos">CANCELAR</NavLink>

                <Button variant="contained" className={classes.blue} type='submit'>Editar Perfil</Button>
            </div>
        </form>
    );
}

export default Cadastro;