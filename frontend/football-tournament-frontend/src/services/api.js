import axios from "axios";

const api = axios.create({
    baseURL: "https://tournament-manager-u9c0.onrender.com/api/v1",
    withCredentials: true,
});

export default api;