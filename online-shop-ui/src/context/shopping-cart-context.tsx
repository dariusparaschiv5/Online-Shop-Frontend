import { createContext, ReactNode, useState } from "react";

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

export const ShoppingCartContext = createContext<ShoppingCartProduct[]>([]);
export const ShoppingCartAddContext = createContext<
  (item: ShoppingCartProduct) => void
>(() => {});

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [shoppingCartItems, setShoppingCartItems] = useState<
    ShoppingCartProduct[]
  >([]);

  function addItemToCart(item: ShoppingCartProduct) {
    const itemExistsInTheCart: boolean =
      shoppingCartItems.find((i) => i.id === item.id) !== undefined
        ? true
        : false;
    if (itemExistsInTheCart) {
      setShoppingCartItems((prevItems) =>
        prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        )
      );
    } else {
      setShoppingCartItems((prevItems) => [
        ...prevItems,
        { ...item, quantity: 1 },
      ]);
    }
  }

  return (
    <ShoppingCartContext.Provider value={shoppingCartItems}>
      <ShoppingCartAddContext.Provider value={addItemToCart}>
        {children}
      </ShoppingCartAddContext.Provider>
    </ShoppingCartContext.Provider>
  );
}
