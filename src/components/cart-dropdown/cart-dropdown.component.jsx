import { useContext } from "react";
import "./cart-dropdown.styles.scss";
import Button from "../button/button.component";
import { CartContext } from "../../contexts/cart.context";
import CartItem from "./components/cart-item/cart-item.component";

const CartDropdown = () => {
  const { isCartOpen, cartItems } = useContext(CartContext);
  return (
    isCartOpen && (
      <div className="cart-dropdown-container">
        {cartItems?.length ? (
          cartItems.map((item) => (
            <div key={item.id} className="cart-items">
              <CartItem item={item} />
            </div>
          ))
        ) : (
          <span className="empty-message">CART STILL EMPTY</span>
        )}
        {cartItems?.length > 0 && <Button>CHECKOUT</Button>}
      </div>
    )
  );
};

export default CartDropdown;
