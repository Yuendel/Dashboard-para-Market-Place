import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from "react-router-dom";
import React from "react";
import Login from './pages/Login';
import Cadastro from "./pages/Cadastro";
import Produtos from './pages/Produtos';
import CriarProduto from "./pages/CriarProduto";
import EditarProduto from "./pages/EditarProduto";
import Perfil from "./pages/Perfil";
import EditarPerfil from "./pages/EditarPerfil";
import { AuthProvider } from './context/AuthContext';
import useAuth from "./hook/useAuth";

function RotasProtegidas(props) {
    const { token } = useAuth();

    return (
        <Route
            render={() => (token ? props.children : <Redirect to="/" />)}
        />
    );
}


function Routes() {
    return (
        <AuthProvider>
            <Router>
                <Switch>
                    <Route path="/" exact component={Login} />
                    <Route path="/cadastro" exact component={Cadastro} />
                    <RotasProtegidas>
                        <Route path="/produtos" exact component={Produtos} />
                        <Route path="/produtos/novo" component={CriarProduto} />
                        <Route path="/produtos/:id/editar" component={EditarProduto} />
                        <Route path="/perfil" exact component={Perfil} />
                        <Route path="/perfil/editar" component={EditarPerfil} />
                    </RotasProtegidas>
                </Switch>
            </Router>
        </AuthProvider>
    )

}

export default Routes;