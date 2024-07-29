export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  weigh: number;
  category: ProductCategory;
  supplier: string;
  imageUrl: string;
}

export interface ProductCategory {
  name: string;
  price: number;
  description: string;
}

const productCategory1: ProductCategory = {
  name: "Digital Camera",
  price: 299.99,
  description: "A high-resolution digital camera with 20MP sensor, 5x optical zoom, and built-in WiFi."
};


export const productsList: Product[] = [
  {
    id: "1",
    category: productCategory1,
    name: "Lorem Ipsum Dolor",
    price: 150,
    description: "desc1",
    weigh: 2,
    supplier: "vivo",
    imageUrl: "",
  },
  {
    id: "2",
    category: productCategory1,
    name: "Sit Amet Consectetur",
    price: 100,
    description: "",
    weigh: 0,
    supplier: "",
    imageUrl: "",
  },
  {
    id: "3",
    category: productCategory1,
    name: "Adipiscing Elit",
    price: 75,
    description: "",
    weigh: 0,
    supplier: "",
    imageUrl: "",
  },
  {
    id: "4",
    category: productCategory1,
    name: "Sed Do Eiusmod",
    price: 75,
    description: "",
    weigh: 0,
    supplier: "",
    imageUrl: "",
  },
  {
    id: "5",
    category: productCategory1,
    name: "Tempor Incididunt",
    price: 75,
    description: "",
    weigh: 0,
    supplier: "",
    imageUrl: "",
  },
];
