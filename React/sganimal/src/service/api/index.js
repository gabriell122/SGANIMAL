import axios from "axios";
const Api = axios.create({
    baseURL: "http://192.168.1.100:3333"
})
export default Api;