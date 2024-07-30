import { Link, useParams } from "react-router-dom";
import { Product, productsList } from "../../data/products";
import "./product-details.scss";
import {
  ShoppingCartAddContext,
  ShoppingCartProduct,
} from "../../context/shopping-cart-context";
import { useContext } from "react";

const ProductDetails = () => {
  const { id } = useParams();
  const product: Product | undefined = productsList.find((p) => p.id === id);

  const addProductToShoppingCart: (item: ShoppingCartProduct) => void =
    useContext(ShoppingCartAddContext);

  if (!product) {
    return <h1>No product found!</h1>;
  }
  return (
    <div className="product-detail-container">
      <div className="product-detail-header">
        <h1 className="product-details-title">Product: {product.name}</h1>
        <div className="buttons">
          <Link to="/shopping-cart">
            <button
              className="add-button"
              onClick={() =>
                addProductToShoppingCart({
                  id: product.id,
                  category: product.category.name,
                  productName: product.name,
                  price: product.price,
                  quantity: 1,
                })
              }
            >
              ADD
            </button>
          </Link>
          <button className="edit-button">EDIT</button>
          <button className="delete-button">DELETE</button>
        </div>
      </div>
      <table className="product-details-table">
        <tbody>
          <tr>
            <td>
              <div className="product-info">
                <div className="info-row">
                  <label>Name</label>
                  <div>{product.name}</div>
                </div>
                <div className="info-row">
                  <label>Category</label>
                  <div>{product.category.name}</div>
                </div>
                <div className="info-row">
                  <label>Price</label>
                  <div>{product.category.price} RON</div>
                </div>
                <div className="info-row">
                  <label>Description</label>
                  <div>{product.category.description}</div>
                </div>
              </div>
            </td>
            <td>
              <div className="product-image">
                <img src="path_to_image.jpg" alt="Product Image" />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProductDetails;
