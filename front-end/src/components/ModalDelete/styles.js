import { makeStyles } from "@material-ui/core/styles";

//Tive ajuda nesses estilos

export default makeStyles((theme) => ({
    container: {
        width: 'min-content',
    },
    deleteIcon: {
        padding: 10,
        position: 'absolute',
        backgroundColor: "#FF505F",
        borderRadius: "10rem",
        margin: '1.2rem 0 0 1rem',
        zIndex: '2',
        '&:hover': {
            backgroundColor: "red",
        },
    },
    botoes: {
        display: "flex",
        justifyContent: "space-between",
        gap: 10,
        marginTop: 15,
        padding: 15,

    },
}));

