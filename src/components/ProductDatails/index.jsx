import React, { useContext, useState, useEffect } from "react";
import Product from "../Product";
import { ProductContext } from "../../context";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { product } = useContext(ProductContext);
  const { elId } = useParams();
  const [newProduct, setNewProduct] = useState(null);

  useEffect(() => {
    const foundProduct = product.find((el) => el.id == elId);
    setNewProduct(foundProduct);
  }, [elId, product]);

  return (
    <div className="container">
      {/* <div className=" mt-12 position-relative h-[450px] max-w-[300px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700  ">
        {newProduct && (
          <img
            className="flex justify-center mt-[20px]"
            src={newProduct.url}
            alt=""
            width={230}
          />
        )}
        <h1 className="flex  justify-center">
          {newProduct && newProduct.title}
        </h1>
      </div> */}

      <div className="flex gap-[50px]">
        {newProduct && (
          <img
            className="flex justify-center mt-12"
            src={newProduct.url}
            alt=""
            width={250}
          />
        )}
        <div className="mt-12 text-3xl">
          <h1 className="text-white">{newProduct && newProduct.title}</h1>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
