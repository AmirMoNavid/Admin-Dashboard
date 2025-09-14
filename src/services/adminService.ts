import axiosBaseQuery from "@/configs/axios/axiosBaseQuery";
import { createApi } from "@reduxjs/toolkit/query/react";
import { getCookie } from "cookies-next";

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL as string;
const endPoint = process.env
  .NEXT_PUBLIC_API_GET_DASHBOARD_DATA_ENDPOINT as string;

const timeout = process.env.NEXT_PUBLIC_API_TIMEOUT as number;

const token = getCookie("token");

interface CustomerDataType {
  id: number;
  user: {
    phoneNumber: number;
    name: string;
    office_id: number;
    username: string;
    avatarUrl: string;
  };
  debt: number;
  createdAt: string;
  modifiedAt: string;
  status: number;
}

export const getDashboardData = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({
    baseUrl,
    timeout: timeout,
  }),
  endpoints: (builder) => ({
    getCustomersData: builder.query<CustomerDataType[], void>({
      query: () => ({
        url: endPoint,
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
  }),
});

export const { useGetCustomersDataQuery } = getDashboardData;
