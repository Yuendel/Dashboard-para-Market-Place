const BASE_URL = 'https://desafio-m03.herokuapp.com/';

async function post(point, data) {
    const resposta = await fetch(BASE_URL + point, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json'
        }
    });
    return resposta.json();
}

async function get(point) {
    const resposta = await fetch(BASE_URL + point);
    return resposta.json();
}

async function del(point) {
    const resposta = await fetch(BASE_URL + point, {
        method: 'DELETE',
    });
    return resposta.json();
}

export { post, get, del };