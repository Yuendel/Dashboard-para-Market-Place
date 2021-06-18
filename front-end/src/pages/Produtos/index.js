import { React, useState, useEffect } from 'react';
import useAuth from "../../hook/useAuth";
import NavBar from '../../components/NavBar';
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";
import useStyles from "./styles";
import { useHistory } from "react-router-dom";
import Card from '../../components/Card';
import { get } from '../../services/ApiClient';


export default function Produtos() {
  const classes = useStyles();
  const { user, token } = useAuth();
  const history = useHistory();
  const [prod, setProd] = useState([]);
  const [erro, setErro] = useState('');



  async function buscarProdutos() {
    try {
      const { dados, ok } = await get('produtos', token);

      if (!ok) {
        setErro(dados);
        console.log(erro);
        return;
      }

      setProd(dados);

    } catch (error) {
      return setErro(error.message);
    }
  }

  useEffect(() => {
    buscarProdutos();
  }, []);




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
              <Card nome={x.nome} preco={x.preco} estoque={x.preco} descricao={x.descricao} imagem={x.imagem} id={x.id} buscarProdutos={buscarProdutos} token={token} />
            )
          })}
        </div>
        <Button variant="contained" className={classes.blue} onClick={() => history.push(`/produtos/novo`)}>Adicionar Produto</Button>
      </div>
    </>
  );
}
