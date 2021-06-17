import { React } from 'react';
import useAuth from "../../hook/useAuth";
import NavBar from '../../components/NavBar';
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";
import useStyles from "./styles";
import { useHistory } from "react-router-dom";
import Card from '../../components/Card';


export default function Produtos() {
  const classes = useStyles();
  const { user } = useAuth();
  const history = useHistory();

  return (
    <>
      <NavBar />
      <div className={classes.produtos}>
        <Typography variant="h3" component="h2" className={classes.nomeLoja} >
          {user.nome_loja}
        </Typography>
        <Typography variant="h4" component="h2" className={classes.tituloProduto}>
          Seus produtos
        </Typography>
        <Card />
        <Button variant="contained" className={classes.blue} onClick={() => history.push(`/produtos/novo`)}>Adicionar Produto</Button>
      </div>
    </>
  );
}
