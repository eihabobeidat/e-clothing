import { createContext, useState } from "react";

export const CartContext = createContext({
  isCartOpen: false,
  cartItems: [],
  setIsCartOpen: () => {},
  setCartItems: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  return (
    <CartContext.Provider
      value={{ isCartOpen, setIsCartOpen, cartItems, setCartItems }}
    >
      {children}
    </CartContext.Provider>
  );
};
