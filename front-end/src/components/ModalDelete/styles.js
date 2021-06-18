import { makeStyles } from "@material-ui/core/styles";

//Tive ajuda nesses estilos

export default makeStyles((theme) => ({
    container: {
        width: 'min-content',
    },
    deleteIcon: {
        padding: 12,
        backgroundColor: "#FF505F",
        borderRadius: "10rem",
        position: 'absolute',
        margin: '1.2rem 0 0 1rem',
        zIndex: '2'
    },
    botoes: {
        display: "flex",
        justifyContent: "space-between",
        gap: 10,
        padding: 15,
        marginTop: 15,
    },
}));

