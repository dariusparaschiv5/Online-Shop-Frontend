import { Navigate, Route, Routes } from "react-router-dom";
import "./App.scss";
import Products from "./components/products-list/products-list";
import ProductDetails from "./components/product-details/product-details";
import ShoppingCart from "./components/shopping-cart/shopping-cart";
import EditProduct from "./components/edit-product/edit-product";
import CreateProduct from "./components/create-product/create-product";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/products" />} />
        <Route path="/products">
          <Route index element={<Products />} />
          <Route path=":id" element={<ProductDetails />} />
          <Route path=":id/edit-product" element={<EditProduct />} />
        </Route>
        <Route path="/shopping-cart" element={<ShoppingCart />} />
        <Route path="/create-product" element={<CreateProduct/>} />
        <Route path="*" element={<Navigate to="/products" />} />
      </Routes>
    </>
  );
}
