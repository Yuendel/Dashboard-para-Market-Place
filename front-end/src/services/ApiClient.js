const BASE_URL = 'https://desafio-m03.herokuapp.com/';



async function post(point, data) {
    const resposta = await fetch(BASE_URL + point, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json'
        }
    });

    const dados = await resposta.json();

    return { dados, ok: resposta.ok };
}

async function postAutenticado(point, data, token) {
    const resposta = await fetch(BASE_URL + point, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-type': 'application/json'
        }
    });

    console.log(token);
    const dados = await resposta.json();

    return { dados, ok: resposta.ok };
}

async function get(point, token) {
    const resposta = await fetch(BASE_URL + point, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    const dados = await resposta.json();

    return { dados, ok: resposta.ok };
}

async function del(point) {
    const resposta = await fetch(BASE_URL + point, {
        method: 'DELETE',
    });
    return resposta.json();
}

async function put(point, data, token) {
    const resposta = await fetch(BASE_URL + point, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-type': 'application/json'
        }
    })

    return resposta.json();
}


export { post, get, del, put, postAutenticado };