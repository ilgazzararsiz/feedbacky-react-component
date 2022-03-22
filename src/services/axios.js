import axios from 'axios';

const baseUrl = process.env.REACT_APP_API_URL
axios.default.baseURL = baseUrl

const instance = axios.create({baseURL: baseUrl});
export default instance