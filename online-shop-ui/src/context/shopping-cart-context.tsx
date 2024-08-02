import { createContext, ReactNode, useContext, useState } from "react";

export type ShoppingCartProduct = {
  id: string;
  category: string;
  productName: string;
  price: number;
  quantity: number;
};

type ShoppingCartProviderProps = {
  children: ReactNode;
};

type ShoppingCartContextType = {
  cartItems: ShoppingCartProduct[];
  addItemToCart: (item: ShoppingCartProduct) => void;
  clearCart: () => void;
};

export const ShoppingCartContext =
  createContext<ShoppingCartContextType | null>(null);
export const ShoppingCartAddContext = createContext<
  (item: ShoppingCartProduct) => void
>(() => {});

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [shoppingCartItems, setShoppingCartItems] = useState<
    ShoppingCartProduct[]
  >([]);

  function addItemToCart(item: ShoppingCartProduct) {
    setShoppingCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id);

      if (existingItem) {
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  }

  function clearCart() {
    setShoppingCartItems([]);
  }

  return (
    <ShoppingCartContext.Provider
      value={{ cartItems: shoppingCartItems, addItemToCart, clearCart }}
    >
      <ShoppingCartAddContext.Provider value={addItemToCart}>
        {children}
      </ShoppingCartAddContext.Provider>
    </ShoppingCartContext.Provider>
  );
}

export function useShoppingCart() {
  const context = useContext(ShoppingCartContext);
  if (!context) {
    throw new Error(
      "useShoppingCart must be used within a ShoppingCartProvider"
    );
  }
  return context;
}
