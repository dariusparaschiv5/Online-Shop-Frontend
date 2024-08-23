import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { ShoppingCartProvider } from "./context/shopping-cart-context.tsx";
import { AuthProvider } from "./context/useAuth.tsx";
import { Provider } from "react-redux";
import store from "./store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <AuthProvider>
          <ShoppingCartProvider>
            <App />
          </ShoppingCartProvider>
        </AuthProvider>
      </Provider>
    </React.StrictMode>
  </BrowserRouter>
);
