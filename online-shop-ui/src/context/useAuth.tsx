// AuthProvider.tsx
import { createContext, useCallback, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";

import {
  User,
  AuthContextType,
  AuthProviderProps,
} from "../interfaces/auth.inteface"; // Adjust path as necessary
import { useLocalStorage } from "../hooks/use-local-storage.hook";

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useLocalStorage<User | null>("user", null);
  const navigate = useNavigate();

  const login = useCallback(
    (data: User) => {
      setUser(data);
      navigate("/products");
    },
    [setUser, navigate]
  );

  const logout = useCallback(() => {
    setUser(null);
    navigate("/", { replace: true });
  }, [setUser, navigate]);

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
    }),
    [user, login, logout]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
