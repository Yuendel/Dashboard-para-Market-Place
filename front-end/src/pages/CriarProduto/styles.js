import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    body: {
        background: "#EEEEEE",
        padding: "5rem 0 1.5rem 12.9rem",
        Width: '100vh',
        Height: '100vh'
    },
    nome: {
        marginBottom: '5.3rem',
    },
    titulo: {
        marginBottom: '3.5rem',
    },
    adicionarProduto: {
        display: "flex",
        flexDirection: "column",
        paddingBottom: 80,
    },
    input: {
        width: '24.5rem',
        marginBottom: '2.8rem',

    },
    listaInputs: {
        display: "flex",
        marginBottom: '2.8rem',
        gap: 25,
    },
    inputNumber: {
        width: '11rem',
    },
    botoes: {
        display: "flex",
        gap: 25,
        alignItems: "center",
        marginTop: '2rem',
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

