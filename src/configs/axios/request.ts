import axios, { AxiosInstance } from "axios";

const baseUrl = "https://api.impcargo.com/v1";
const timeout = 20000;

const axiosInstance: AxiosInstance = axios.create({
  baseURL: baseUrl,
  timeout: Number(timeout),
  maxRedirects: 5,
});

export default axiosInstance;
