import { PRODUCT_API_URL } from "../constants/url.constant";

export const productsService = {
  findAll: async () => {
    try {
      const response = await fetch(PRODUCT_API_URL, {
        method: "GET",
      });
      if (!response.ok) {
        throw new Error(`HTTP error: Status ${response.status}`);
      }

      const jsonData = await response.json();
      return jsonData;
    } catch (err) {
      console.log(err);
      throw err;
    }
  },

  findOneById: async (id: string) => {
    try {
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
      console.log(id);
      const response = await fetch(`${PRODUCT_API_URL}/${id}`, {
        method: "DELETE",
      });
      console.log(response.status);

      if (response.ok) {
        console.log("Delete successful, no content returned");

        return null;
      } else {
        throw new Error(`HTTP error: Status ${response.status}`);
      }
    } catch (err) {
      console.error("Failed to delete:", err);
      throw err;
    }
  },
};
