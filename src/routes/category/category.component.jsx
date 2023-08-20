import { useContext, Fragment } from "react";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../../contexts/products.context";
import { CartContext } from "../../contexts/cart.context";
import ProductCard from "../../components/product-card/product-card.component";
import "./category.styles.scss";

const Category = () => {
  const { category } = useParams();
  const { products: productsCategories } = useContext(ProductsContext);
  const { cartItems, setCartItems } = useContext(CartContext);

  const addCartItem = (cartItem) => {
    setCartItems((state) => [...state, cartItem]);
  };

  const deleteCartItem = (cartItem) => {
    setCartItems((state) => state.filter((item) => item.id !== cartItem.id));
  };

  return productsCategories[category] ? (
    <Fragment>
      <h1 className="title">{category.toUpperCase()}</h1>
      <div className="products-container">
        {productsCategories[category.toLocaleLowerCase()].map((product) => {
          const isAdded = !!cartItems.find((x) => x.id === product.id);
          return (
            <ProductCard
              key={product.id}
              product={product}
              action={isAdded ? deleteCartItem : addCartItem}
              buttonType={isAdded ? "delete" : "add"}
            />
          );
        })}
      </div>
    </Fragment>
  ) : (
    <h1 className="title loading"> Loading . . .</h1>
  );
};

export default Category;
