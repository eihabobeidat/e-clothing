import { useContext } from "react";
import "./cart-dropdown.styles.scss";
import Button from "../button/button.component";
import { CartContext } from "../../contexts/cart.context";

const CartDropdown = () => {
  const { isCartOpen, cartItems } = useContext(CartContext);

  return (
    isCartOpen && (
      <div className="cart-dropdown-container">
        {cartItems?.length ? (
          cartItems.map((item) => (
            <div key={item.id} className="cart-items">
              {item.name}
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
