import axios from "axios"
const ConnApi = axios.create({
    baseURL: "http://localhost:3333"
})
export default ConnApi