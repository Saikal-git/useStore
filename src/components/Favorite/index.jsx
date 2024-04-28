import React, { useContext } from "react";
import { ProductContext } from "../../context";
import { MdDelete } from "react-icons/md";

const Favorite = () => {
  const { favorite, setFavorite } = useContext(ProductContext);

  const deleteFavorite = (data) => {
    let delFavorite = favorite.filter((el) => el.id !== data.id);
    setFavorite(delFavorite);
    localStorage.setItem("favorite", JSON.stringify(delFavorite));
  };

  return (
    <div id="favorite">
      <div className="container">
        <div className="mt-[50px]">
          {favorite.length > 0 && (
            <div className="w-[70%] overflow-y-scroll h-[500px]">
              {favorite.map((el, idx) => (
                <div
                  key={idx}
                  className="relative w-full mb-[20px] flex items-start bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  <img
                    className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                    src={el.url}
                    alt=""
                  />
                  <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {el.title}
                    </h5>
                    <p className="my-5 font-normal text-gray-700 dark:text-gray-400">
                      Here are the biggest enterprise technology acquisitions of
                      2021 so far, in reverse chronological order.
                    </p>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {el.price}$
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
          )}
          {favorite.length === 0 && (
            <h1 style={{ color: "white", fontSize: "40px" }}>
              У вас еще нет избранных фильмов!
            </h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Favorite;
