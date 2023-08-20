import { createContext, useEffect, useState } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";

export const ProductsContext = createContext({
  products: {},
  setProducts: () => {},
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState({});

  useEffect(() => {
    const getCategoriesMap = async () => {
      const productsCategories = await getCategoriesAndDocuments();
      setProducts(productsCategories);
    };
    getCategoriesMap();
  }, []);

  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};
