import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProductContext } from "../../context";

const ProductDetails = () => {
  const nav = useNavigate();
  const { elId } = useParams();
  const { product, basket, setBasket } = useContext(ProductContext);
  const productDet = product.find((el) => el.id == elId);
  const someBasket = basket.some((el) => el.id == elId);
  const basketProduct = (data) => {
    setBasket([...basket, data]);
    localStorage.setItem("basket", JSON.stringify([...basket, data]));
  };
  return (
    <div id="productDetails">
      {productDet && (
        <div className="container">
          <div className="flex gap-[80px] mt-[30px]">
            <div className="">
              <img src={productDet.url} alt="" width={400} />
            </div>
            <div className="text-white text-5xl mt-[50px]">
              <h1>{productDet.title}</h1>
              <div className="text-green-600 text-4xl flex gap-8 mt-[250px] ">
                <h2>Price: ${productDet.price}</h2>
                <button
                  onClick={
                    someBasket
                      ? () => nav(`/basket`)
                      : () => basketProduct(productDet)
                  }
                  type="button"
                  className={`text-gray-900 bg-gradient-to-r ${
                    someBasket ? "bg-orange-600" : "bg-blue-600"
                  }  to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-2xl px-5 py-2.5 text-center me-2 mb-2`}
                >
                  {someBasket ? "btn" : "Buy"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
