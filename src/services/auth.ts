import axiosInstance from "@/configs/axios/request";
// import axios from "axios";

export const login = (data: { index: string; password: string }) => {
  return axiosInstance.post("/user/userApi/loginPassword/", data);
};
