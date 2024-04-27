import React, { useState, useEffect } from "react";
import { ProductContext } from ".";

const RootContext = ({ children }) => {
  const [product, setProduct] = useState([]);
  const [favorite, setFavorite] = useState([]);

  const getProduct = () => {
    let nav = JSON.parse(localStorage.getItem("block")) || [];
    let navFav = JSON.parse(localStorage.getItem("favorite")) || [];
    let delFav = JSON.parse(localStorage.getItem("favorite")) || [];
    let filFav = JSON.parse(localStorage.getItem("favorite")) || [];
    setProduct(nav);
    setFavorite(navFav);
    setFavorite(delFav);
    setFavorite(filFav);
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        product,
        setProduct,
        favorite,
        setFavorite,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default RootContext;
