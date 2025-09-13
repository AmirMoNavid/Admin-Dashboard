import axios from "axios";
import { env } from "process";

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
const endPoint = process.env.NEXT_PUBLIC_API_GET_DASHBOARD_DATA_ENDPOINT;

export const getDashboardData = (token: string) => {
  return axios
    .create({
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .get(`${baseUrl}${endPoint}`);
};
