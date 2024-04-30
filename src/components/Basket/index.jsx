import React, { useContext } from "react";
import { ProductContext } from "../../context";

const Basket = () => {
  const { basket, setBasket } = useContext(ProductContext);
  const removeBas = (id) => {
    let delBasket = basket.filter((item) => item.id !== id);
    setBasket(delBasket);
    localStorage.setItem("basket", JSON.stringify(delBasket));
  };
  return (
    <div className="container">
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
                key={el.id} // Добавляем ключ
                className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <img src={el.url} alt="" width={80} />
                </th>
                <td className="px-6 py-4">{el.title}</td>
                <td className="px-6 py-4">{idx + 1}</td>
                <td className="px-6 py-4">${el.price}</td>
                <td className="px-6 py-4">
                  <a
                    onClick={() => removeBas(el.id)} // Передаем только id
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Delete
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Basket;
