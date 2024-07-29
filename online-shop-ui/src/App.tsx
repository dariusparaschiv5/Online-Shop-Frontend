import ProductDetails from "./components/product-details/product-details";
import { Product, productsList } from "./data/products";
import "./App.scss";

const product: Product = productsList[0];

function App() {
  return (
    <div className="App">
      <ProductDetails product={product} />
    </div>
  );
}

export default App;
