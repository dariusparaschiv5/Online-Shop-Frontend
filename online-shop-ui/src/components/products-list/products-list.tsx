import "./products-list.scss";
import { Link, useNavigate } from "react-router-dom";
import ProductListItem from "../product-list-item/product-list-item";
import { useAuth } from "../../context/useAuth";
import { useGetProductsQuery } from "../../productsApi"; // Import the RTK Query hook

export default function Products() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const { data: products, error, isLoading } = useGetProductsQuery(); // Use RTK Query hook

  const handleLogout = () => {
    logout();
    navigate("/login"); // Redirect to login page after logout
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) {
    console.error("Error fetching products:", error);
    return <div>Error: {error instanceof Error ? error.message : "An unknown error occurred"}</div>;
 }
 

  return (
    <>
      <div className="nav-container">
        <h1>{user && <p>Welcome, {user.username}</p>}</h1>
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      </div>
      <div className="products-container">
        <div className="header-container">
          <h2 className="products-title">Products</h2>
          <Link to="/shopping-cart">
            <button className="cart-button">CART</button>
          </Link>
          <Link to="/create-product">
            <button className="add-button">ADD</button>
          </Link>
        </div>

        <table>
          <tr>
            <th>Category</th>
            <th>Product Name</th>
            <th>Price</th>
            <th></th>
          </tr>
          {products?.map((product) => (
            <ProductListItem key={product.id} product={product} />
          ))}
        </table>
      </div>
    </>
  );
}
