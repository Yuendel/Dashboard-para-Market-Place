import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ModalDelete from "../ModalDelete";
import useStyles from './styles';
import { useHistory } from 'react-router-dom';


export default function CardProduto(props) {
    const classes = useStyles();
    const history = useHistory();


    return (
        <Card className={classes.root} onClick={() => history.push(`/produtos/${props.id}/editar`)}>
            <CardActionArea>
                <ModalDelete
                    id={props.id}
                    buscarProdutos={props.buscarProdutos}
                    setErro={props.erro}
                    token={props.token}
                />
                <CardMedia
                    component="img"
                    alt={props.nome}
                    height="140"
                    image={props.imagem}
                    title={props.nome}
                    className={classes.imagem}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.nome}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.descricao}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardActions}>
                <Typography gutterBottom color="textSecondary" variant="body2" component="p">
                    {props.estoque}{" "}
                    {props.estoque > 1 ? "UNIDADES" : "UNIDADE"}
                </Typography>
                <Typography gutterBottom variant="body2" component="p">
                    R$ {String((props.preco / 100).toFixed(2)).replace(".", ",")}
                </Typography>
            </CardActions>
        </Card>
    );
}
