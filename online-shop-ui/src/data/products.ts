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
  name: "Drinks",
  price: 9.99,
  description: "Your pefect choice for a hot day."
};

const productCategory2: ProductCategory = {
  name: "Food",
  price: 32.99,
  description: "Embrace the italian vibe."
};


export const productsList: Product[] = [
  {
    id: "1",
    category: productCategory1,
    name: "Cola",
    price: 10,
    description: "desc1",
    weigh: 2,
    supplier: "vivo",
    imageUrl: "",
  },
  {
    id: "2",
    category: productCategory1,
    name: "Pepsi",
    price: 10,
    description: "",
    weigh: 0,
    supplier: "",
    imageUrl: "",
  },
  {
    id: "3",
    category: productCategory1,
    name: "Fanta",
    price: 9,
    description: "",
    weigh: 0,
    supplier: "",
    imageUrl: "",
  },
  {
    id: "4",
    category: productCategory2,
    name: "Pizza",
    price: 32,
    description: "",
    weigh: 0,
    supplier: "",
    imageUrl: "",
  },
  {
    id: "5",
    category: productCategory2,
    name: "Pasta",
    price: 28,
    description: "",
    weigh: 0,
    supplier: "",
    imageUrl: "",
  },
];
