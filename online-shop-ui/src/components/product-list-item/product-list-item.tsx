import { Link } from "react-router-dom";
import { Product } from "../../data/products";
import "./product-list-item.scss";

type ProductListItemProps = {
  product: Product;
};

export default function ProductListItem({ product }: ProductListItemProps) {
  return (
    <tr>
      <td>{product.category.name}</td>
      <td>{product.name}</td>
      <td>{product.price}</td>
      <td className="product-details-link-col">
        <Link to={`/products/${product.id}`}>
          <button className="product-details-page-btn">{">"}</button>
        </Link>
      </td>
    </tr>
  );
}
