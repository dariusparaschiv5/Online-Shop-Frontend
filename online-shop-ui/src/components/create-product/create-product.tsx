import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { productsService } from "../../services/products.service";
import { ProductData } from "../../interfaces/product.inteface";
import "../edit-product/edit-product.scss"

const CreateProduct = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { isDirty, isValid },
  } = useForm({
    mode: "onChange",
  });
  const [error, setError] = useState("");

  const onSubmit = async (data: ProductData) => {
    try {
      const newProduct = await productsService.create(data);
      alert("Product created successfully!");
      console.log("Product uptdated succesfully: " + newProduct);
      navigate(`/products/${newProduct.id}`);
    } catch (error) {
      console.error("Error creating product:", error);
      setError("Failed to create product");
    }
  };

  const handleCancel = () => {
    reset();
    navigate(`/products`);
  };

  if (error) return <div>Error: {error}</div>;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Create A New Product</h1>
      <label>Name</label>
      <input defaultValue="Name" {...register("name")} />

      <label>Category</label>
      <input defaultValue="Macbook" {...register("category")} />

      <label>Image</label>
      <input
        defaultValue="http://example.com/image.png"
        {...register("image")}
      />

      <label>Price</label>
      <input defaultValue={0.0} {...register("price")} />

      <textarea {...register("description")} defaultValue="Default desc" />

      <button type="button" onClick={handleCancel}>
        CANCEL
      </button>
      <input type="submit" disabled={!isDirty || !isValid} value="SAVE" />
    </form>
  );
};

export default CreateProduct;
