

import React, { useContext, useState } from "react";
import { ProductContext } from "../../context";
import { Link } from "react-router-dom";
import Product from "../Product";

const Basket = () => {
  const { basket, setBasket } = useContext(ProductContext);
  let totalPrice = basket.reduce((acc, el, idx, arr) => {
    return acc + +el.price * el.quantity;
  }, 0);

  const deleteBasket = (el) => {
    let filterBasket = basket.filter((item) => item.id !== el.id);
    setBasket(filterBasket);
    localStorage.setItem("basket", JSON.stringify(filterBasket));
  };
  const quenBas = (data) => {
    let chageBas = basket.map((el) =>
      el.id === data.id ? { ...el, quantity: el.quantity + 1 } : el
    );
    console.log(chageBas);
    setBasket(chageBas);
  };
  const quenBasket = (data) => {
    let chageBas = basket.map((el) =>
      el.id === data.id
        ? { ...el, quantity: el.quantity > 1 ? el.quantity - 1 : 1 }
        : el
    );
    console.log(chageBas);
    setBasket(chageBas);
  };
  const removeAll = () => {
    localStorage.removeItem("basket");
    setBasket([]);
  };

  return (
    <div className="mt-[50px]">
      <div className="container">
        {basket.length ? (
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    Img
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Quantity
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {basket.map((el) => (
                  <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <img src={el.url} alt="" width={120} />
                    </th>
                    <td class="px-6 py-4 text-[20px]">{el.title}</td>
                    <div
                      style={{
                        display: "flex",
                        marginTop: "30px",
                        marginLeft: "20px",
                      }}
                      className="btn"
                    >
                      <button onClick={() => quenBasket(el)}>-</button>
                      <td class="px-6 py-4 text-[20px]">{el.quantity}</td>
                      <button onClick={() => quenBas(el)}>+</button>
                    </div>
                    <td class="px-6 py-4 text-[20px]">
                      ${el.price * el.quantity}
                    </td>
                    <td class="px-6 py-4">
                      <button
                        onClick={() => deleteBasket(el)}
                        type="button"
                        class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="py-[40px] flex items-center justify-between">
              <h1 className="text-white text-[40px]">
                Total Price: {totalPrice}$
              </h1>
              <button
                onClick={() => removeAll()}
                type="button"
                class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-2xl px-5 py-2.5 text-center me-2 mb-2"
              >
                Remove All
              </button>
            </div>
          </div>
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
            <div class="mt-3 mb-4 text-sm">
              У вас еще нет продуктов в карзине,что бы добавить продукт вы
              можете перейти по кнопке.
            </div>
            <div class="flex">
              <Link
                to={"/product"}
                onClick={<Product />}
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
  );
};

export default Basket;
