import React, { useContext, useState } from "react";
import { ProductContext } from "../../context";
import ProductCard from "../ProductCard";
import { Link } from "react-router-dom";
import AddProduct from "../AddProduct";

const Product = () => {
  const { product, setProduct } = useContext(ProductContext);
  const [sort, setSort] = useState(false);

  const selectSort = (e) => {
    if (sort === "cheap") {
      setProduct(product?.sort((a, b) => b.price - a.price));
    } else if (sort === "expensive") {
      setProduct(product?.sort((a, b) => a.price - b.price));
    } else if (sort === "a-z") {
      setProduct(product?.sort((a, b) => (a.title > b.title ? "1" : "-1")));
    } else if (sort === "z-a") {
      setProduct(product?.sort((a, b) => (b.title < a.title ? "-1" : "1")));
    }
  };

  return (
    <div id="product">
      <div className="mt-[75px]">
        <div className="container">
          {product.length > 0 ? (
            <>
              <select
                onChange={(e) => {
                  setSort(e.target.value);
                  selectSort();
                }}
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
            </>
          ) : (
            <div
              id="alert-additional-content-4"
              class="p-4 mb-4 text-yellow-800 border border-yellow-300 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300 dark:border-yellow-800"
              role="alert"
            >
              <div class="flex items-center">
                <svg
                  class="flex-shrink-0 w-4 h-4 me-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                </svg>
                <span class="sr-only">Info</span>
                <h3 class="text-lg font-medium">This is a warning alert</h3>
              </div>
              <div class="mt-2 mb-4 text-sm">
                У вас еще нет продуктов,что бы добавить продукт вы можете
                перейти по кнопке.
              </div>
              <div class="flex">
                <Link
                  to={"/addproduct"}
                  onClick={() => <AddProduct />}
                  type="button"
                  class="text-white bg-yellow-800 hover:bg-yellow-900 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-xs px-3 py-1.5 me-2 text-center inline-flex items-center dark:bg-yellow-300 dark:text-gray-800 dark:hover:bg-yellow-400 dark:focus:ring-yellow-800"
                >
                  <svg
                    class="me-2 h-3 w-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 14"
                  >
                    <path d="M10 0C4.612 0 0 5.336 0 7c0 1.742 3.546 7 10 7 6.454 0 10-5.258 10-7 0-1.664-4.612-7-10-7Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
                  </svg>
                  View more
                </Link>
                <button
                  type="button"
                  class="text-yellow-800 bg-transparent border border-yellow-800 hover:bg-yellow-900 hover:text-white focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:hover:bg-yellow-300 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-gray-800 dark:focus:ring-yellow-800"
                  data-dismiss-target="#alert-additional-content-4"
                  aria-label="Close"
                >
                  Dismiss
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
