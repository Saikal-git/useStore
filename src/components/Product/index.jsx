import React, { useContext, useState } from "react";
import { ProductContext } from "../../context";
import ProductCard from "../ProductCard";

const Product = ({ el }) => {
  const { product, setProduct } = useContext(ProductContext);
  const [sort, setSort] = useState(false);

  const selectSort = (e) => {
    let tar = e.target.value;
    const sortProduct = product.slice().sort((a, b) => {
      if (tar === "expensive") {
        return b.price - a.price;
      } else if (tar === "cheap") {
        return a.price - b.price;
      } else if (tar === "a-z") {
        return a.title > b.title ? "1" : "-1";
      } else if (tar === "z-a") {
        return b.title > a.title ? "1" : "-1";
      }
    });
    setProduct(sortProduct);
  };

  return (
    <div id="product">
      <div className="container">
        <select
          onChange={selectSort()}
          className="bg-gray-50 mt-4 border w-[20%] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="expensive">Expensive</option>
          <option value="cheap">Cheap</option>
          <option value="a-z">A-Z</option>
          <option value="z-a">Z-A</option>
        </select>

        <div className=" mt-10  flex items-center justify-start flex-wrap gap-[40px]">
          {product.map((el, idx) => (
            <ProductCard el={el} key={idx} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
