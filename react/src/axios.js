import axios from 'axios'

const instance= axios.create({baseURL:'https://localhost:44325/songs/api'})
export default instance