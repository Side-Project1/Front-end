import axios from "axios";

const axiosinstance = axios.create({
  baseURL: "http://13.209.81.190:8080",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

export default axiosinstance;
