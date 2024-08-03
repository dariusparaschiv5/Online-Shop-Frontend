import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { ShoppingCartProvider } from "./context/shopping-cart-context.tsx";
import { AuthProvider } from "./context/useAuth.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <React.StrictMode>
      <AuthProvider>
        <ShoppingCartProvider>
          <App />
        </ShoppingCartProvider>
      </AuthProvider>
    </React.StrictMode>
  </BrowserRouter>
);
