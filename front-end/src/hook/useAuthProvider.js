import { useState } from "react";
import { useLocalStorage } from 'react-use';

export default function useAuthProvider() {
    const [tokenPersistido, setTokenPersistido, removeTokenPersistido] = useLocalStorage('TOKEN', null);
    const [usuario, setUsuario, removeUsuario] = useLocalStorage('USUARIO', {});

    const [user, setUser] = useState(usuario);
    const [token, setToken] = useState(tokenPersistido);

    const logar = (usuario, token) => {
        setToken(token);
        setUser(usuario);
        setTokenPersistido(token);
        setUsuario(usuario);
    }

    const deslogar = () => {
        setToken(null);
        removeTokenPersistido();
        removeUsuario();
    }

    return {
        user,
        token,
        logar,
        deslogar,
    };
}