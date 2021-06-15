import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";
import React from "react";
import Login from './pages/Login'
import Cadastro from "./pages/Cadastro";
import Produtos from './pages/Produtos'
function Routes() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/cadastro" exact component={Cadastro} />
                <Route path="/produtos" exact component={Produtos} />
            </Switch>
        </Router>
    )

}

export default Routes;