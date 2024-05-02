import React, { useContext } from "react";
import { ProductContext } from "../../context";
import Product from "../Product";

const Search = () => {
    const {product} = useContext(ProductContext)
  return (
    <div>
        <Product />
    </div>
  );
};

export default Search;
