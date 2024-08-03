import {
  LoginCredentials,
  LoginResponse,
} from "../interfaces/auth.inteface";

const API_URL = "http://localhost:3000";

export const authService = {

  async login(credentials: LoginCredentials): Promise<LoginResponse> {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to log in");
    }

    return response.json();
  },
};
