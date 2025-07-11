import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://chatapp-8vyo.onrender.com",
    withCredentials: true,
});
