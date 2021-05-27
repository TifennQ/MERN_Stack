import axios from "axios"

export default axios.create({
    baseURL : "http://localhost:500/api/v1/restaurants",
    headers: {
        "Content-type": "application/json"
    }
})