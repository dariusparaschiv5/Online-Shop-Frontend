import { Navigate, Route, Routes } from "react-router-dom";
import "./App.scss";
import Products from "./components/products/products";
import ProductDetails from "./components/product-details/product-details";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/products" />} />
        <Route path="/products">
          <Route index element={<Products />} />
          <Route path=":id" element={<ProductDetails />} />
        </Route>
        <Route path="*" element={<Navigate to="/products" />} />
      </Routes>
    </>
  );
}
