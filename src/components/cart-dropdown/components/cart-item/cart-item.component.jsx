import "./cart-item.styles.scss";

const CartItem = ({ item: { name, imageUrl, price, quantity } }) => {
  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={name} />
      <div className="item-details">
        <h2 className="name">{name}</h2>
        <span>{price + "$"}</span>
      </div>
    </div>
  );
};

export default CartItem;