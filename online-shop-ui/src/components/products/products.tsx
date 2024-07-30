import "./products.scss";
import { Product, productsList } from "../../data/products";
import { Link } from "react-router-dom";

export default function Products() {
  const products: Product[] = productsList;
  return (
    <>
      <div className="products-container">
        <div className="header-container">
          <h1 className="products-title">Products</h1>
          <button className="add-button">ADD</button>
          <button className="cart-button">CART</button>
        </div>

        <table>
          <thead>
            <tr>
              <th>Category</th>
              <th>Product Name</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.category.name}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td className="product-details-link-col">
                  <Link to={`/products/${product.id}`}>
                  <button className="product-details-page-btn">{">"}</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
