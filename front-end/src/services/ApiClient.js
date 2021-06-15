const BASE_URL = 'https://migii-dev.herokuapp.com/';

async function post(resource, data) {
    const resposta = await fetch(BASE_URL + resource, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json'
        }
    });

    return resposta.json();
}

async function get(resource) {
    const resposta = await fetch(BASE_URL + resource);

    return resposta.json();
}

async function del(resource) {
    const resposta = await fetch(BASE_URL + resource, {
        method: 'DELETE',
    });

    return resposta.json();
}

export { post, get, del };