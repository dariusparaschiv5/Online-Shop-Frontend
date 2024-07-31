import { API_BASE_URL } from "../constants/url.constant";
import { CreateOrderDTO } from "../interfaces/order.inteface";

const ORDERS_BASE_URL = `${API_BASE_URL}/orders`;

export const orderService = {
  create: async (orderData: CreateOrderDTO, signal: AbortSignal) => {
    try {
      const response = await fetch(ORDERS_BASE_URL, {
        method: "POST",
        body: JSON.stringify(orderData),
        signal,
      });

      if (!response.ok) {
        throw new Error(`HTTP error: Status ${response.status}`);
      }

      return response.json();
    } catch (err) {
      console.error(err);
      throw err;
    }
  },
};

