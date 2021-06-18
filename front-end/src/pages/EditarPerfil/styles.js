import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        display: 'grid',
        width: '24.5rem',
        height: '54.125rem',
        marginLeft: '12rem',
        background: '#FFFFFF',
    },
    titulo: {
        marginBottom: '2.35rem'
    },
    blue: {
        backgroundColor: '#007DFF',
        color: '#FFF',
        alignSelf: 'center',
        maxwidth: '25rem',
        marginLeft: '1rem',
        '&:hover': {
            color: "black",
        },
    },
    margin: {
        margin: theme.spacing(1),
    },
    withoutLabel: {
        marginTop: theme.spacing(3),
    },
    textField: {
        width: '10rem',
    },
    erro: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
        backdrop: {
            zIndex: '1',
            color: '#fff',
        },
        senha: {
            width: '392px'
        }
    }

}));