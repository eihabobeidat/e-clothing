import { useContext } from "react";
import { ProductsContext } from "../../contexts/products.context";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import "./categories-preview.styles.scss";

const CategoriesPreview = () => {
  const { products: productsCategories } = useContext(ProductsContext);

  return (
    <>
      {Object.keys(productsCategories).map((key, index) => (
        <CategoryPreview
          key={key + index}
          title={key}
          products={productsCategories[key]}
        />
      ))}
    </>
  );
};

export default CategoriesPreview;
