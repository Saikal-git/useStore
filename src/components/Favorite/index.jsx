import React, { useContext } from "react";
import { ProductContext } from "../../context";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Product from "../Product";

const Favorite = () => {
  const { favorite, setFavorite } = useContext(ProductContext);

  const deleteFavorite = (data) => {
    if (data && data.id) {
      let delFavorite = favorite.filter((el) => el.id !== data.id);
      setFavorite(delFavorite);
      localStorage.setItem("favorite", JSON.stringify(delFavorite));
    } else {
      console.error("Invalid data or missing id property");
    }
  };

  return (
    <div id="favorite">
      <div className="container">
        <div className="mt-[50px] mb-8">
          {favorite.length ? (
            <div className="w-[70%] overflow-y-scroll h-[500px]">
              {favorite?.map((el, idx) => (
                <div
                  key={idx}
                  className="relative w-full mb-[20px] flex items-start bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  {el && el.url && (
                    <img
                      className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                      src={el.url}
                      alt=""
                    />
                  )}
                  <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {el && el.title ? el.title : "Title not available"}
                    </h5>
                    <p className="my-5 font-normal text-gray-700 dark:text-gray-400">
                      Here are the biggest enterprise technology acquisitions of
                      2021 so far, in reverse chronological order.
                    </p>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {el && el.price ? el.price : "Price not available"}$
                    </h5>
                  </div>
                  <a
                    href="#"
                    onClick={() => deleteFavorite(el)}
                    className="text-red-600 absolute bottom-[10px] right-[10px] text-3xl"
                  >
                    <MdDelete />
                  </a>
                </div>
              ))}
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
              <div class="mt-2 mb-4 text-sm">
                У вас еще нет понравившихся продуктов,что бы добавить продукт вы
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
    </div>
  );
};

export default Favorite;
