import axios from "axios";

export const getDashboardData = (token: string) => {
  return axios
    .create({
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .get("https://api.impcargo.com/v1/order/orderAdminApi/getOrdersAdmin/");
};
