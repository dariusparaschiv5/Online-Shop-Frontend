import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Product } from "../../data/products";
import { productsService } from "../../services/products.service";
import { useForm } from "react-hook-form";
import { ProductData } from "../../interfaces/product.inteface";

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const { register, handleSubmit, reset, watch } = useForm();
  const [initialData, setInitialData] = useState({});
  const allFields = watch();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchProduct = async () => {
      setLoading(true);
      try {
        const fetchedProduct = await productsService.findOneById(id);
        setProduct(fetchedProduct);
        setInitialData(fetchedProduct);
        reset(fetchedProduct);
        setError("");
      } catch (error) {
        setError("Product not found");
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id, reset]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!product) return <h1>No product found!</h1>;

  const onSubmit = async (data: ProductData) => {
    if (JSON.stringify(data) === JSON.stringify(initialData)) {
      alert("No changes have been made.");
      return;
    }

    try {
      const updatedProduct = await productsService.update(product.id, data);
      alert("Product updated successfully!");
      console.log("Product uptdated succesfully: " + updatedProduct);
      navigate(`/products/${id}`);
    } catch (error) {
      console.error("Error updating product:", error);
      setError("Failed to update product");
    }
  };

  const isDataChanged =
    JSON.stringify(allFields) !== JSON.stringify(initialData);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Edit: {product.name}</h1>
      <label>Name</label>
      <input defaultValue={product.name} {...register("name")} />

      <label>Category</label>
      <input defaultValue={product.category.name} {...register("category")} />

      <label>Image</label>
      <input
        defaultValue="http://example.com/image.png"
        {...register("image")}
      />

      <label>Price</label>
      <input defaultValue={product.price} {...register("price")} />

      <textarea
        {...register("description")}
        defaultValue={product.description}
      />

      <button type="button">CANCEL</button>
      <input type="submit" disabled={!isDataChanged} value="SAVE" />
    </form>
  );
};

export default EditProduct;
