import { Product } from "./ProductsList";

interface ProductDetailProps {
  product: Product;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  return (
    <div className="product-detail">
      <div>Category: {product.category}</div>
      <div>Name: {product.name}</div>
      <div>Price: {product.price}</div>
    </div>
  );
};

export default ProductDetail;
