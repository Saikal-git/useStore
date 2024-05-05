import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../../context";
import ProductCard from "../ProductCard";

const Search = () => {
  const { title } = useParams();
  const { product } = useContext(ProductContext);

  const searchProduct = product.filter((el) => el.title === title);
  console.log(title);
  return (
    <div className="py-[50px]">
      <div className="container">
        <div className="flex items-center flex-wrap gap-[40px]">
          {searchProduct.map((el, idx) => (
            <ProductCard el={el} key={idx} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
