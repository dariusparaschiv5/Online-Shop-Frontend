import { useForm } from "react-hook-form";
import { ProductFormProps } from "../../interfaces/product.inteface";
import "../product-details/product-details.scss"


const ProductForm: React.FC<ProductFormProps> = ({
  defaultValues,
  onSubmit,
  buttonLabel,
}) => {
  const { register, handleSubmit } = useForm({
    defaultValues,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Name</label>
      <input {...register("name")} />

      <label>Category</label>
      <input {...register("category")} />

      <label>Image URL</label>
      <input {...register("image")} />

      <label>Price</label>
      <input type="number" {...register("price")} />

      <label>Description</label>
      <textarea {...register("description")} />

      <button type="submit">{buttonLabel}</button>
    </form>
  );
};

export default ProductForm;
