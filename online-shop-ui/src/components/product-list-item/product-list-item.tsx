import { Link } from "react-router-dom";
import { Product } from "../../data/products";
import "./product-list-item.scss";

type ProductProps = {
  product: Product;
};

export default function ProductListItem({ product }: ProductProps) {
  console.log("the product category is:" + product.category.name);
  return (
    <>
      <tr>
        <td>{product.category?.name}</td>
        <td>{product?.name}</td>
        <td>{product.price}</td>
        <td className="product-details-link-col">
          <Link to={`/products/${product?.id}`}>
            <button className="product-details-page-btn">{">"}</button>
          </Link>
        </td>
      </tr>
    </>
  );
}
