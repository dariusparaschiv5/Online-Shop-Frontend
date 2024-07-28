import ProductsTable, { Product } from "./components/ProductsList";

function App() {
  const products: Product[] = [
    {
      id: "1",
      category: "Lorem Ipsum",
      name: "Lorem Ipsum Dolor",
      price: 150,
      description: "desc1",
      weigh: 2,
      supplier: "vivo",
      imageUrl: "",
    },
    {
      id: "2",
      category: "Lorem Ipsum",
      name: "Sit Amet Consectetur",
      price: 100,
      description: "",
      weigh: 0,
      supplier: "",
      imageUrl: "",
    },
    {
      id: "3",
      category: "Lorem Ipsum",
      name: "Adipiscing Elit",
      price: 75,
      description: "",
      weigh: 0,
      supplier: "",
      imageUrl: "",
    },
    {
      id: "4",
      category: "Lorem Ipsum",
      name: "Sed Do Eiusmod",
      price: 75,
      description: "",
      weigh: 0,
      supplier: "",
      imageUrl: "",
    },
    {
      id: "5",
      category: "Lorem Ipsum",
      name: "Tempor Incididunt",
      price: 75,
      description: "",
      weigh: 0,
      supplier: "",
      imageUrl: "",
    },
  ];

  return (
    <div className="App">
      <ProductsTable products={products} />
    </div>
  );
}

export default App;
