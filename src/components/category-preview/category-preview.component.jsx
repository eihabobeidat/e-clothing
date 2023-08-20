import { useNavigate } from "react-router-dom";
import "./category-preview.styles.scss";
import ProductCard from "../product-card/product-card.component";

const CategoryPreview = ({ title, products }) => {
  const navigate = useNavigate();

  const handleRoute = () => {
    navigate(title);
  };

  return (
    <div className="category-preview-container">
      <h2>
        <span onClick={handleRoute}>{title.toUpperCase()}</span>
      </h2>
      <div className="preview">
        {products
          .filter((_, index) => index < 4)
          .map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              action={handleRoute}
              buttonType="navigate"
            />
          ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
