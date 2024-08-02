import { API_BASE_URL } from "../constants/url.constant";

export const apiService = {
  login: async (username: string, password:string) => {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'An error occurred during login');
      }
      return data;
    } catch (error) {
      console.error('Login Error:', error);
      throw error;
    }
  },
};