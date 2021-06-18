import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useStyles from "./styles";
import { ReactComponent as StoreSelected } from "../../assets/store-selected.svg";
import { ReactComponent as Close } from "../../assets/close.svg";
import { ReactComponent as Store } from "../../assets/store.svg";
import { ReactComponent as UserSelected } from "../../assets/user-selected.svg";
import { ReactComponent as User } from "../../assets/user.svg";
import useAuth from '../../hook/useAuth';
import { useHistory } from "react-router-dom";

export default function Navbar(props) {
    const { deslogar } = useAuth();
    const classes = useStyles();
    const history = useHistory();

    function loja() {
        history.push("/produtos");
    }

    function perfil() {
        history.push("/perfil");
    }


    return (
        <AppBar position="fixed" className={classes.appbar}>
            <Toolbar className={classes.nav}>
                {props.selecionado === "padrao" && (
                    <StoreSelected className={classes.cursor} />
                )}
                {props.selecionado !== "padrao" && (
                    <Store className={classes.cursor} onClick={loja} />
                )}
                {props.selecionado === "perfil" && (
                    <UserSelected className={classes.cursor} />
                )}
                {props.selecionado !== "perfil" && (
                    <User className={classes.cursor} onClick={perfil} />
                )}
                <Close className={classes.close} onClick={deslogar} />
            </Toolbar>
        </AppBar>
    );
}