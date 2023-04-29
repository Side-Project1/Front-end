import axios from "axios";

const axiosinstance = axios.create({
  baseURL: "http://13.124.28.152:8080",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

export default axiosinstance;
