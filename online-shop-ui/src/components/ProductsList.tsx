import "./ProductsList.scss";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  weigh: number;
  category: string;
  supplier: string;
  imageUrl: string;
}

interface ProductsListProps {
  products: Product[];
}

const ProductsTable: React.FC<ProductsListProps> = ({ products }) => {
  return (
    <div className="products-container">
      <div className="header-container">
        <h1 className="products-title">Products</h1>
        <button className="add-button">ADD</button>
        <button className="cart-button">CART</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Product Name</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.category}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td className="arrow-cell">&gt;</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsTable;
