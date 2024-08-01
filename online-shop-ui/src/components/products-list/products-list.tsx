import "./products-list.scss";
import { Product } from "../../data/products";
import { Link } from "react-router-dom";
import ProductListItem from "../product-list-item/product-list-item";
import { useEffect, useState } from "react";
import { productsService } from "../../services/products.service";

export default function Products() {
  const [products, setProducts] = useState<Product[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const allProducts = await productsService.findAll();
        setProducts(allProducts);
        setError(null);
      } catch (err) {
        console.error("Error fetching products:", err);
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
        setProducts(null);
      } finally {
        setLoading(false);
      }
    };

    fetchAllProducts();
  }, [products?.length]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <div className="products-container">
        <div className="header-container">
          <h1 className="products-title">Products</h1>
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
          {products &&
            products.map((product) =>
              product ? (
                <ProductListItem key={product.id} product={product} />
              ) : null
            )}
        </table>
      </div>
    </>
  );
}
