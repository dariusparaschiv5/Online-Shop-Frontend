import { useContext, useEffect, useState } from "react";
import { ShoppingCartAddContext } from "../../context/shopping-cart-context";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Product } from "../../data/products";
import { productsService } from "../../services/products.service";
import "./product-details.scss";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const addItemToCart = useContext(ShoppingCartAddContext);

  useEffect(() => {
    if (!id) return;

    const fetchProduct = async () => {
      setLoading(true);
      try {
        const fetchedProduct = await productsService.findOneById(id);
        setProduct(fetchedProduct);
        setError("");
      } catch (error) {
        setError("Product not found");
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleDelete = async () => {
    if (confirm("Are you sure you want to delete this product?")) {
      try {
        if (id) {
          await productsService.delete(id);
        } else {
          throw Error("The product's id that needs to be deleted is not valid");
        }
        navigate("/products");
      } catch (error) {
        console.error("Error deleting product:", error);
        setError("Failed to delete product");
      }
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!product) return <h1>No product found!</h1>;

  return (
    <div className="product-detail-container">
      <div className="product-detail-header">
        <h1 className="product-details-title">Product: {product.name}</h1>
        <div className="buttons">
          <Link to="/shopping-cart">
            <button
              className="add-button"
              onClick={() =>
                addItemToCart({
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
          <button className="delete-button" onClick={handleDelete}>
            DELETE
          </button>
        </div>
      </div>
      <table className="product-details-table">
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
      </table>
    </div>
  );
};

export default ProductDetails;
