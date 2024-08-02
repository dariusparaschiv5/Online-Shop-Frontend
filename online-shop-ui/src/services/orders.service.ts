import { API_BASE_URL } from "../constants/url.constant";
import { CreateOrderDTO } from "../interfaces/order.inteface";

const ORDERS_BASE_URL = `${API_BASE_URL}/orders`;

export const ordersService = {
  create: async (orderData: CreateOrderDTO) => {
    try {
      const response = await fetch(ORDERS_BASE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      if (!response.ok) {
        console.log(await response.json());
        throw new Error(`HTTP error: Status ${response.status}`);
      }

      return response.json();
    } catch (err) {
      console.error(err);
      throw err;
    }
  },
};
