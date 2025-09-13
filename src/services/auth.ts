import axiosInstance from "@/configs/axios/request";
// import axios from "axios";

const endPoint = process.env.NEXT_PUBLIC_API_LOGIN_ENDPOINT as string;



export const login = (data: { index: string; password: string }) => {
  return axiosInstance.post(endPoint, data);
};
