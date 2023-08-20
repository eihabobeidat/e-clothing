// import './category-item.styles.scss'

import { useNavigate } from "react-router-dom";

const Category = ({ title, image }) => {
  const navigate = useNavigate();

  const handleRoute = () => {
    navigate(`shop/${title.toLowerCase()}`);
  };

  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div onClick={handleRoute} className="category-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default Category;
