import { PRODUCT_API_URL } from "../constants/url.constant";

export const productsService = {
  findAll: async () => {
    console.log("Attempting to fetch products from API:", PRODUCT_API_URL);
    try {
      const response = await fetch(PRODUCT_API_URL, {
        method: "GET",
      });
      console.log("Response received:", response);
      if (!response.ok) {
        throw new Error(`HTTP error: Status ${response.status}`);
      }

      const jsonData = await response.json();
      console.log("JSON data parsed from the response:", jsonData);
      return jsonData;
    } catch (err) {
      console.log(err);
      console.error("Failed to fetch or parse response:", err);
      throw err;
    }
  },

  findOneById: async (id: string) => {
    try {
      console.log("ID", id);
      const response = await fetch(`${PRODUCT_API_URL}/${id}`);

      if (!response.ok) {
        throw new Error(`HTTP error: Status ${response.status}`);
      }

      return response.json();
    } catch (err) {
      console.error(err);
      throw err;
    }
  },

  delete: async (id: string) => {
    try {
      const response = await fetch(`$PRODUCT_API_URL}/${id}`, {
        method: "DELETE",
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
