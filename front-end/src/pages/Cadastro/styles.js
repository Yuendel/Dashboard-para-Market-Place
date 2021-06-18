import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        display: 'grid',
        placeContent: 'center',
        justifyItems: 'center',
        width: '24.5rem',
        height: '54.125rem',
        marginLeft: '30rem',
        marginTop: '2rem',
        gap: '2.5rem',
        background: '#FFFFFF',
        boxShadow: '0px 8px 9px -5px rgba(0, 0, 0, 0.2), 0px 15px 22px 2px rgba(0, 0, 0, 0.14), 0px 6px 28px 5px rgba(0, 0, 0, 0.12)',
        borderRadius: '16px',
        zIndex: 0
    },
    titulo: {
        marginBottom: '2.35rem'
    },
    blue: {
        backgroundColor: '#007DFF',
        color: '#FFF',
        alignSelf: 'center',
        maxwidth: '25rem',
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
        width: '25ch',
    },
    erro: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
        backdrop: {
            zIndex: theme.zIndex.drawer + 1,
            color: '#fff',
        },
    }

}));
