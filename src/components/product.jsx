import React from "react";
import prod_1 from "../assets/prod_1.jpeg";
import prod_2 from "../assets/prod_2.jpeg";
import prod_3 from "../assets/prod_3.jpeg";
import prod_4 from "../assets/prod_4.jpeg";

const ProductDisplay = () => {
  const obj = {
    1: prod_1,
    2: prod_2,
    3: prod_3,
    4: prod_4,
  };
  return (
    <>
      <div className="p-10 h-full">
        <h2 className=" text-2xl pb-2">Products</h2>
        <div className="border border-light-wood w-full h-full rounded-2xl flex flex-col items-center gap-2 pb-4">
          <div className="grid grid-cols-4 gap-2 w-full h-auto p-2 ">
            {[1, 2, 3, 4]?.map((i) => {
              const url = `prod_${i}`;
              return (
                <div className="product-card">
                  <div className="flex-2">
                    <img
                      src={obj[i]}
                      alt={`prod_${i}`}
                      className="aspect-video w-full h-75 rounded-b-2xl"
                    />
                  </div>
                  <div className="flex-1">2</div>
                </div>
              );
            })}
          </div>
          <div>
            <button className="border w-50 border-primary-wooden text-primary-wooden p-2 rounded-sm">
              View Products
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDisplay;
