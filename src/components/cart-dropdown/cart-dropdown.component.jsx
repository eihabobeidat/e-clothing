import { useContext } from "react";
import "./cart-dropdown.styles.scss";
import Button from "../button/button.component";
import { CartContext } from "../../contexts/cart.context";
import CartItem from "./components/cart-item/cart-item.component";
import { useNavigate } from "react-router-dom";

const CartDropdown = () => {
  const { isCartOpen, cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const handleRoute = () => navigate("/checkout");

  return (
    isCartOpen && (
      <div className="cart-dropdown-container">
        <div className="cart-items">
          {cartItems?.length ? (
            cartItems.map((item) => <CartItem key={item.id} item={item} />)
          ) : (
            <span className="empty-message">CART STILL EMPTY</span>
          )}
        </div>
        {cartItems?.length > 0 && (
          <Button onClick={handleRoute}>CHECKOUT</Button>
        )}
      </div>
    )
  );
};

export default CartDropdown;
