import axios from 'axios'

const api = axios.create({
    baseURL: 'http://169.57.150.59:8012'
})

export default api;