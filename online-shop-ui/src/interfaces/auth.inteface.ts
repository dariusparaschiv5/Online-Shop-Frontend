import { ReactNode } from "react";

export interface User {
  username: string;
  password: string;
  role: string;
}

export interface AuthContextType {
  user: User | null;
  login: (data: User) => void;
  logout: () => void;
}

export interface AuthProviderProps {
  children: ReactNode;
}

export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
}

export interface LoginCredentials {
  username: string;
  password: string;
}
