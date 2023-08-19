import { useContext } from "react";
import { ProductsContext } from "../../contexts/products.context";
import { CartContext } from "../../contexts/cart.context";
import ProductCard from "../../components/product-card/product-card.component";
import "./shop.styles.scss";

const Shop = () => {
  const { products } = useContext(ProductsContext);
  const { cartItems, setCartItems } = useContext(CartContext);

  const addCartItem = (cartItem) => {
    setCartItems((state) => [...state, cartItem]);
  };

  const deleteCartItem = (cartItem) => {
    setCartItems((state) => state.filter((item) => item.id !== cartItem.id));
  };

  return (
    <div className="products-container">
      {products.map((product) => {
        const isAdded = !!cartItems.find((x) => x.id === product.id);
        return (
          <ProductCard
            key={product.id}
            product={product}
            action={isAdded ? deleteCartItem : addCartItem}
            buttonType={isAdded ? "delete" : "add"}
          />
        );
      })}
    </div>
  );
};

export default Shop;
