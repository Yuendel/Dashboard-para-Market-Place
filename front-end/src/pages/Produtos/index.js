import { React, useState, useEffect } from 'react';
import useAuth from "../../hook/useAuth";
import NavBar from '../../components/NavBar';
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";
import useStyles from "./styles";
import { useHistory } from "react-router-dom";
import Card from '../../components/Card';
import { get } from '../../services/ApiClient';
import { Alert } from '@material-ui/lab';
import Loading from "../../components/Loading";
import Divider from "@material-ui/core/Divider";

export default function Produtos() {
  const classes = useStyles();
  const { user, token } = useAuth();
  const history = useHistory();
  const [prod, setProd] = useState([]);
  const [erro, setErro] = useState('');
  const [carregando, setCarregando] = useState(false);

  useEffect(() => {
    buscarProdutos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function buscarProdutos() {
    setCarregando(true);
    setErro('');
    try {
      const { dados, ok } = await get('produtos', token);

      if (!ok) {
        setErro(dados);
        setCarregando(false);
        return;
      }

      setProd(dados);
      setCarregando(false);
    } catch (error) {
      setCarregando(false);
      return setErro(error.message);
    }
  }

  return (
    <>
      <NavBar selecionado="padrao" />
      <div className={classes.produtos}>
        <Typography variant="h3" component="h2" className={classes.nomeLoja} >
          {user.nome_loja}
        </Typography>
        <Typography variant="h4" component="h2">
          Seus produtos
        </Typography>
        <div className={classes.prods}>

          {prod.map((x) => {
            return (
              <Card nome={x.nome} preco={x.preco} estoque={x.estoque} descricao={x.descricao} imagem={x.imagem} id={x.id} buscarProdutos={buscarProdutos} token={token} />
            )
          })}
        </div>

        <Divider />
        <Button variant="contained" className={classes.blue} onClick={() => history.push(`/produtos/novo`)}>Adicionar Produto</Button>

        {erro && <Alert severity="error" className='erro'>{erro}</Alert>}

        {carregando && <Loading open={carregando} />}
      </div>
    </>
  );
}
