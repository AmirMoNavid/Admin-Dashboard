import axios, { AxiosInstance } from "axios";

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
const timeout = process.env.NEXT_PUBLIC_API_TIMEOUT;

const axiosInstance: AxiosInstance = axios.create({
  baseURL: baseUrl,
  timeout: Number(timeout),
  maxRedirects: 5,
});

export default axiosInstance;
