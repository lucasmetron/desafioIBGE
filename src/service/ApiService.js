const api = 'https://servicodados.ibge.gov.br/api/v1/localidades';

export const ApiService = {
    get(endpoint) {
        console.log(`${api}${endpoint}`)
        return fetch(`${api}/${endpoint}`)
            .then(response => {
                return response.json()
            })
            .catch(erro => console.log(erro))
    }
}