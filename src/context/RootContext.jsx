import React, { useEffect, useState } from "react";
import { ProductContext } from ".";

const RootContext = ({ children }) => {
  const [product, setProduct] = useState([]);
  const [favorite, setFavorite] = useState([]);
  const [basket, setBasket] = useState([]);
  function getProduct() {
    let res = JSON.parse(localStorage.getItem("product")) || [];
    let resFav = JSON.parse(localStorage.getItem("favorite")) || [];
    let resDel = JSON.parse(localStorage.getItem("favorite")) || [];
    let resBas = JSON.parse(localStorage.getItem("basket")) || [];
    setProduct(res);
    setFavorite(resFav);
    setFavorite(resDel);
    setBasket(resBas);
  }
  useEffect(() => {
    getProduct();
  }, []);
  return (
    <ProductContext.Provider
      value={{
        product,
        favorite,
        basket,
        setBasket,
        setFavorite,
        setProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default RootContext;
