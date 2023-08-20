import "./product-card.styles.scss";
import Button from "../button/button.component";

const buttonTitle = {
  add: "Add to cart",
  delete: "Delete from cart",
  navigate: "Check Products",
};

const ProductCard = ({
  product: { id, name, price, imageUrl },
  buttonType = "add",
  action,
}) => {
  const handleClick = () =>
    buttonType === "navigate"
      ? action()
      : action({ id, name, price, imageUrl });

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      {action && (
        <Button buttonType={"inverted"} onClick={handleClick}>
          {buttonTitle[buttonType]}
        </Button>
      )}
    </div>
  );
};

export default ProductCard;
