import { useCallback, useState } from "react";
import "./shopping-cart.scss";
import { Link, useNavigate } from "react-router-dom";
import {
  ShoppingCartProduct,
  useShoppingCart,
} from "../../context/shopping-cart-context";

import ShoppingCartItem from "../shopping-cart-item/shopping-cart-item";
import { CreateOrderDTO, OrderDetail } from "../../interfaces/order.inteface";
import { ordersService } from "../../services/orders.service";

export default function ShoppingCart() {
  const navigate = useNavigate();
  const { cartItems, clearCart } = useShoppingCart();

  const useCreateOrder = () => {
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const createOrder = useCallback(async (orderData: CreateOrderDTO) => {
      console.log("Attempting to create order with data:", orderData);
      try {
        setLoading(true);
        await ordersService.create(orderData);
        setError(null);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occured");
        }
      } finally {
        setLoading(false);
      }
    }, []);

    return { error, loading, createOrder };
  };

  const { error, loading, createOrder } = useCreateOrder();

  const handleCheckout = async () => {
    if (!cartItems || cartItems.length === 0) {
      console.error("Attempted to checkout with an empty cart.");
      return;
    }
    try {
      const mockOrderData: CreateOrderDTO = {
        customerId: "67bd7cb2-1cda-419b-91cd-e05bcd779b1c",
        country: "USA",
        city: "Los Angeles",
        county: "California",
        streetAdress: "Street5",
        createdAt: new Date(),
        orderDetails: cartItems.map((item) => {
          return {
            productId: item.id,
            locationId: "4cacaa00-333d-4dd0-8183-a173d3825c14",
            quantity: item.quantity,
          } as OrderDetail;
        }),
      };
      console.log("Order Data being sent:", mockOrderData);
      await createOrder(mockOrderData);
      clearCart();
      navigate("/products", { replace: true });
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) {
    console.log("Loading...");
    return <div>Loading...</div>;
  }
  if (error) {
    console.log("Error:", error);
    return <div>Error: {error}</div>;
  }

  return (
    <div className="shopping-container">
      <div className="header-container">
        <h1>Shopping Cart</h1>
        <div className="button-container">
          <Link to="/checkout">
            <button className="checkout-button" onClick={handleCheckout}>
              CHECKOUT
            </button>
          </Link>
        </div>
      </div>

      <table>
        <tr>
          <th>Category</th>
          <th>Product Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th></th>
        </tr>
        {cartItems.map((item: ShoppingCartProduct) => (
          <ShoppingCartItem key={item.id} item={item} />
        ))}
      </table>
    </div>
  );
}
