import "./checkout.styles.scss";
import { CartContext } from "../../contexts/cart.context";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();
  const { cartItems, setCartItems } = useContext(CartContext);

  const handleQuantityDecrease = (item) => {
    if (!item.quantity || item.quantity === 1) return;
    item.quantity = item.quantity - 1;
    updateItemList(item);
  };

  const handleQuantityIncrease = (item) => {
    if (!item.quantity) {
      item.quantity = 2;
    } else {
      item.quantity = item.quantity + 1;
    }
    updateItemList(item);
  };

  const handleItemDelete = (item) => {
    setCartItems((items) => items.filter((x) => x.id !== item.id));
  };

  const updateItemList = (item) => {
    setCartItems((items) => {
      const index = items.findIndex((x) => x.id === item.id);
      items[index] = { ...item };
      return [...items];
    });
  };

  useEffect(() => {
    !cartItems?.length && navigate("/shop");
  }, [cartItems, navigate]);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>

      {cartItems.map((item) => (
        <div className="checkout-item-container" key={item.id}>
          <div className="image-container">
            <img src={item.imageUrl} alt={item.name} />
          </div>
          <span className="name">{item.name}</span>
          <div className="quantity">
            <span onClick={() => handleQuantityDecrease(item)}>{"< "}</span>
            <span>{item.quantity ?? "1"}</span>
            <span onClick={() => handleQuantityIncrease(item)}>{" >"}</span>
          </div>
          <span className="price">{item.price}</span>
          <div className="remove-button" onClick={() => handleItemDelete(item)}>
            &#10005;
          </div>
        </div>
      ))}
      <h2>
        {`total: ${cartItems.reduce((previous, item) => {
          if (!item.quantity) item.quantity = 1;
          return previous + item.price * item.quantity;
        }, 0)}`}
      </h2>
    </div>
  );
};

export default Checkout;
