export interface ProductData {
  name?: string;
  price?: number;
  category?: string;
  image?: string;
  description?: string;
}

export interface ProductFormProps {
  defaultValues?: ProductData;
  onSubmit: (data: ProductData) => void;
  buttonLabel: string;
}
