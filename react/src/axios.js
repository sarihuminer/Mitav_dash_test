import axios from 'axios'

const instance = axios.create({ baseURL: 'https://localhost:44396/api/User/' })
export default instance