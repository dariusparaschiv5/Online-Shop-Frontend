import "./products-list.scss";
import { Product, productsList } from "../../data/products";
import { Link } from "react-router-dom";
import ProductListItem from "../product-list-item/product-list-item";

export default function Products() {
  const products: Product[] = productsList;
  return (
    <>
      <div className="products-container">
        <div className="header-container">
          <h1 className="products-title">Products</h1>
          <Link to="/shopping-cart">
            <button className="cart-button">CART</button>
          </Link>
        </div>

        <table>
        <tr>
          <th>Category</th>
          <th>Product Name</th>
          <th>Price</th>
          <th></th>
        </tr>
        {products.map((product) => 
          <ProductListItem key={product.id} product={product}/>
        )}
      </table>
      </div>
    </>
  );
}
