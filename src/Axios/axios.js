import axios from "axios"
const instance = axios.create({
    baseURL:"https://todoapp-pbb6.onrender.com"
})
export default instance