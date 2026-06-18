import React from "react";
import ProductCard from "./productCard";

const ProductDisplay = () => {
  return (
    <>
      <div className="p-10 h-full">
        <h2 className=" text-2xl pb-2">Products</h2>
        <div className="border border-stone-300 w-full h-full rounded-2xl flex flex-col items-center gap-8 pb-8">
          <div className="grid md:grid-cols-4 sm:grid-cols-1 gap-2 w-full h-auto p-10 ">
            {[1, 2, 3, 4]?.map((i, index) => {
              const url = `prod_${i}`;
              return <ProductCard i={i} key={index} />;
            })}
          </div>
          <div>
            <button className="button-pulse w-50 border border-stone-400 text-stone-500 p-2 rounded-sm transition-all">
              View Products
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDisplay;
