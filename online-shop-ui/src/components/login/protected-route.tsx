import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/useAuth";
import { AuthProviderProps } from "../../interfaces/auth.inteface";

export const ProtectedRoute = ({ children }: AuthProviderProps) => {
  const { user } = useAuth();
  if (!user) {
    // user is not authenticated
    return <Navigate to="/login" />;
  }
  return children;
};