import "./product-card.styles.scss";
import Button from "../button/button.component";

const ProductCard = ({
  product: { name, price, imageUrl },
  buttonTitle = "Add to cart",
}) => {
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType={"inverted"}>{buttonTitle}</Button>
    </div>
  );
};

export default ProductCard;