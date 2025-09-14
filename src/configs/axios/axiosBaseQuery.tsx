// Axios Framework:
import axios from "axios";
// Axios Framework Types:
import type { AxiosRequestConfig, AxiosError } from "axios";
// RTK Quary Types:
import type { BaseQueryFn } from "@reduxjs/toolkit/query";

const axiosBaseQuery =
  (
    {
      baseUrl,
      timeout,
      prepareHeaders,
    }: {
      baseUrl: string;
      timeout?: number;
      prepareHeaders?: (
        headers: AxiosRequestConfig["headers"],
        { getState }: { getState: Function }
      ) => AxiosRequestConfig["headers"];
    } = { baseUrl: "", timeout: 0 }
  ): BaseQueryFn<
    {
      url: string;
      method?: AxiosRequestConfig["method"];
      data?: AxiosRequestConfig["data"];
      params?: AxiosRequestConfig["params"];
      headers?: AxiosRequestConfig["headers"];
    },
    unknown,
    unknown
  > =>
  async ({ url, method = "GET", data, params, headers }) => {
    try {
      if (!!prepareHeaders) {
        headers = prepareHeaders(headers || {}, { getState: () => {} });
      }

      const result = await axios({
        url: baseUrl + url,
        timeout: timeout,
        method,
        data,
        params,
        headers,
      });

      return { data: result.data };
    } catch (axiosError) {
      const err = axiosError as AxiosError;

      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

export default axiosBaseQuery;
