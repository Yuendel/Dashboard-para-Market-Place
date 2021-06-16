import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import useStyles from './styles'
import Typography from '@material-ui/core/Typography';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import clsx from 'clsx';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Alert, AlertTitle } from '@material-ui/lab';
import CircularProgress from '@material-ui/core/CircularProgress';
import Backdrop from '@material-ui/core/Backdrop';


function Cadastro() {
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
    setErro('');
    try {
      /*const resposta = await fetch('https://desafio-m03.herokuapp.com/login', {
        method: 'POST',
        body: JSON.stringify(data),
      });

      const dados = await resposta.json();*/

      if (data.senha === '123') {
        history.push('/produtos');
      }
      setCarregando(false);
    } catch (error) {
      setErro(error.message);
    }


  }

  return (
    <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
      <Typography className={classes.titulo} variant="h4">Criar uma conta</Typography>
      <TextField id="standard-basic" label="Nome" type='name' {...register('nome')} />
      <TextField id="standard-basic" label="Nome da loja" type='name' {...register('nome_loja')} />
      <TextField id="standard-basic" label="E-mail" type='email' {...register('email')} />
      <FormControl className={clsx(classes.margin, classes.textField)}>
        <InputLabel htmlFor="standard-adornment-password">Senha</InputLabel>
        <Input
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
          id="standard-adornment-password"
          {...register('senha')}
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

      {erro && <Alert severity="error" className='erro'>

        <AlertTitle>Error</AlertTitle>
        {erro}
      </Alert>}
      <Backdrop className={classes.backdrop} open={carregando} >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Button variant="contained" className={classes.blue} type='submit'>
        CRIAR CONTA
      </Button>
      <Typography variant="body2">Já possui uma conta? <a href='/'>ACESSE</a> </Typography>
    </form>
  );
}

export default Cadastro;
