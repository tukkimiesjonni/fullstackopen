import axios from 'axios'
const UrlAll = 'https://studies.cs.helsinki.fi/restcountries/api/all'

const getAll = () => {
    const request = axios.get(UrlAll)
    return request.then(response => response.data)
}

export default {
    getAll: getAll
}