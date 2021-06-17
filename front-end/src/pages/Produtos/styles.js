import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    nomeLoja: {
        marginBottom: '5rem'
    },
    tituloProduto: {

    },
    produtos: {
        display: 'flex',
        flexDirection: 'column',
        gap: 25,
        marginLeft: '14rem',
        marginTop: '7rem'
    },
    blue: {
        backgroundColor: '#007DFF',
        color: '#FFF',
        width: 195,
        '&:hover': {
            color: "black",
        },
    }
}));