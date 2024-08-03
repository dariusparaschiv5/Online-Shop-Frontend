import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

import { LoginCredentials } from "../../interfaces/auth.inteface";
import { authService } from "../../services/auth.service";
import { useAuth } from "../../context/useAuth";

import "./login.scss";
export const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const { login } = useAuth();

  const navigate = useNavigate();

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    localStorage.clear();
    const credentials: LoginCredentials = { username, password };

    try {
      localStorage.clear();

      const { accessToken, refreshToken } = await authService.login(
        credentials
      );
      login({username, password, role});
      console.log("The logged in usernmae is: " + username);
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      navigate("/products"); // Redirect to products page upon successful login
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message); // Show error message to user
      }
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin}>
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="login-button ">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
