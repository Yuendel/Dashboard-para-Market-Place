import Navbar from "../../components/NavBar";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import useStyles from "./styles";
import useAuth from "../../hook/useAuth";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { get } from '../../services/ApiClient';
import { Alert } from '@material-ui/lab';
import Loading from "../../components/Loading";



export default function Perfil() {
    const { user, logar, token } = useAuth();
    const classes = useStyles();
    const history = useHistory();
    const [erro, setErro] = useState('');
    const [carregando, setCarregando] = useState(false);
    useEffect(() => {
        buscarPerfil();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    async function buscarPerfil() {
        setCarregando(true);
        setErro(``);
        try {
            const { dados, ok } = await get('perfil', token);

            if (!ok) {
                setErro('Erro: ' + dados);
                setCarregando(false);
                return;
            }
            logar(dados, token);
            setCarregando(false);
        } catch (error) {
            setErro('Erro: ' + error.message);
            setCarregando(false);
        }
    }



    return (
        <div className={classes.body}>
            <Navbar selecionado="perfil" />
            <div className={classes.perfil}>
                <Typography variant="h2" component="h2" className={classes.nome}>
                    {user.nome_loja}
                </Typography>
                <Typography variant="h4" component="h2" className={classes.titulo}>
                    Perfil
                </Typography>
                <div className={classes.inputs}>
                    <TextField
                        className={classes.input}
                        disabled
                        id="nome"
                        label="Seu nome"
                        value={user.nome}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        className={classes.input}
                        disabled
                        id="nome_loja"
                        label="Nome da loja"
                        value={user.nome_loja}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        className={classes.input}
                        disabled
                        id="email"
                        label="E-mail"
                        value={user.email}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </div>
                <Divider />
                {erro && <Alert severity="error" className='erro'>{erro}</Alert>}

                {carregando && <Loading open={carregando} />}
                <Button variant="contained" className={classes.blue} onClick={() => history.push("/perfil/editar")}>Editar perfil</Button>
            </div>
        </div>
    );
}