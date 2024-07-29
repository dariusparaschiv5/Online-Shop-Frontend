import { Product } from "../../data/products";
import "./product-details.scss"

type ProductProps = {
  product: Product;
};

export default function ProductDetails({ product }: ProductProps) {
  return (
    <div className="product-detail-container">
      <div className="product-detail-header">
        <h1 className="product-details-title">Product: {product.name}</h1>
        <div className="buttons">
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
                <img src="path_to_your_image.jpg" alt="Product Image" />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
