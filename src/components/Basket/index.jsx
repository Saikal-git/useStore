import React, { useContext, useState } from "react";
import { ProductContext } from "../../context";
import { Link } from "react-router-dom";
import Product from "../Product";

const Basket = () => {
  const { basket, setBasket, product } = useContext(ProductContext);

  const removeBas = (data) => {
    let delBasket = basket.filter((item) => item.id !== data.id);
    setBasket(delBasket);
    localStorage.setItem("basket", JSON.stringify(delBasket));
  };

  let totalPrice = basket.reduce((acc, el) => {
    return acc + +el.price * el.quantity;
  }, 0);
  const quanBas = (data) => {
    let changeBas = basket.map((el) =>
      el.id === data.id ? { ...el, quantity: el.quantity + 1 } : el
    );
    setBasket(changeBas);
  };
  const quanBasket = (data) => {
    let changeBas = basket.map((el) =>
      el.id === data.id
        ? { ...el, quantity: el.quantity > 1 ? el.quantity - 1 : 1 }
        : el
    );
    setBasket(changeBas);
  };

  return (
    <div className="mt-[50px] mb-[50px]">
      <div className="container">
        {basket.length ? (
          <div className="mt-[30px] relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Img
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Quantity
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {basket.map((el, idx) => (
                  <tr
                    key={el.id}
                    className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <img src={el.url} alt="" width={80} />
                    </th>
                    <td className="px-6 py-4 text-[20px]">{el.title}</td>
                    <div className="flex px-6 py-4 mt-[35px]">
                      <button onClick={() => quanBasket(el)}>-</button>
                      <td className="px-6 py-4 text-[20px] ">${el.quantity}</td>
                      <button onClick={() => quanBas(el)}>+</button>
                    </div>
                    <td className="px-6 py-4 text-[20px]">
                      ${el.price * el.quantity}
                    </td>
                    <td className="px-6 py-4">
                      <a
                        onClick={() => removeBas(el)}
                        href="#"
                        className="font-medium text-[17px] text-red-600 dark:text-red-500 hover:underline"
                      >
                        Delete
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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
        {basket.length ? (
          <h1 className="text-white text-[30px] mt-7">
            Total Price: {totalPrice}$
          </h1>
        ) : null}
      </div>
    </div>
  );
};

export default Basket;
