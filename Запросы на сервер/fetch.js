const requestURL = 'https://jsonplaceholder.typicode.com/users';

const body = {
    name: 'Anton',
    age: '24'
}

function sendRequest(method, url, body = null) {
    const headers = {
        'Content-Type': 'aplication/json'
    };
    return fetch(url, {
        method: method,
        body: JSON.stringify(body),
        headers: headers
    }).then(response => {
        if (response.ok) {
            return response.json()
        }
        return response.json().then(error => {
            const e = new Error('Pizdec');
            e.data = error;
            throw e;
        })
    })
};

// sendRequest('GET', requestURL)
// .then(data => console.log(data))
// .catch(err => console.log(err))


sendRequest('POST', requestURL, body)
    .then(data => console.log(data))
    .catch(err => console.log(err))