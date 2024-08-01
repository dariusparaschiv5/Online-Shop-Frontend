import { PRODUCT_API_URL } from "../constants/url.constant";
import { ProductData } from "../interfaces/product.inteface";

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

  update: async (id: string, productData: ProductData) => {
    try {
      const response = await fetch(`${PRODUCT_API_URL}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Failed to update product:", errorData);
        throw new Error(`HTTP error: Status ${response.status}`);
      }

      return response.json();
    } catch (err) {
      console.error("Error updating product:", err);
      throw err;
    }
  },

  create: async (productData: ProductData) => {
    try {
      const response = await fetch(PRODUCT_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productData),
      });
      if (!response.ok) {
        const errorData = await response.json();
        console.error("Failed to create product:", errorData);
        throw new Error(`HTTP error: Status ${response.status}`);
      }
      return response.json();
    } catch (err) {
      console.error("Error creating product:", err);
      throw err;
    }
  },
};
