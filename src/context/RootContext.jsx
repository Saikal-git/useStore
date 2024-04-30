import React, { useState, useEffect } from "react";
import { ProductContext } from ".";

const RootContext = ({ children }) => {
  const [product, setProduct] = useState([]);
  const [favorite, setFavorite] = useState([]);
  const [basket, setBasket] = useState([]);

  const getProduct = () => {
    let nav = JSON.parse(localStorage.getItem("block")) || [];
    let navFav = JSON.parse(localStorage.getItem("favorite")) || [];
    let delFav = JSON.parse(localStorage.getItem("favorite")) || [];
    let filFav = JSON.parse(localStorage.getItem("favorite")) || [];
    let filBas = JSON.parse(localStorage.getItem("basket")) || [];
    let delBas = JSON.parse(localStorage.getItem("basket")) || [];
    setProduct(nav);
    setFavorite(navFav);
    setFavorite(delFav);
    setFavorite(filFav);
    setBasket(filBas);
    setBasket(delBas);
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
        basket,
        setBasket,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default RootContext;
