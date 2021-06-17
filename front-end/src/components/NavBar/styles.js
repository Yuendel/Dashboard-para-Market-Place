import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    nav: {
        display: "flex",
        flexDirection: "column",
        gap: '4.25rem',
        marginTop: '6rem',
    },
    appbar: {
        left: 0,
        display: "flex",
        alignItems: "center",
        backgroundColor: "#434343",
        borderRadius: "0px 0px 32px 0px",
        width: '8.625rem',
        minHeight: "100vh",

    },
    close: {
        width: 33,
        height: 33,
        cursor: "pointer",
    },
    cursor: {
        cursor: "pointer",
    },
}));