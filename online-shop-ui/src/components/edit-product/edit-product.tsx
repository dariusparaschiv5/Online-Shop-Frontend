import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Product } from "../../data/products";
import { productsService } from "../../services/products.service";
import { useForm } from "react-hook-form";

const EditProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const { register, handleSubmit } = useForm();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

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

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!product) return <h1>No product found!</h1>;

  const onSubmit = (data: unknown) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Edit: {product.name}</h1>
      <label>Name</label>
      <input defaultValue="Default Name" {...register("name")} />

      <label>Category</label>
      <input defaultValue="Default Category" {...register("category")} />

      <label>Image</label>
      <input
        defaultValue="http://example.com/image.png"
        {...register("image")}
      />

      <label>Price</label>
      <input defaultValue="Default Price" {...register("price")} />

      <textarea {...register("description")} defaultValue="Long description" />

      <button type="button">CANCEL</button>
      <input type="submit" value="SAVE" />
    </form>
  );
};

export default EditProduct;
