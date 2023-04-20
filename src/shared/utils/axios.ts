import axios from "axios";

const loginTestApi = axios.create({
    baseURL: "/api",
})

export default loginTestApi;