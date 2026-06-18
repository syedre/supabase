import React, { useState } from "react";
import { LandingHeader } from "./landingPage";
import ProductCard from "../components/productCard";

const catergory = ["All", "Home Decor", "Gift Sets", "Wall Art"];

const ProductCategory = () => {
  const [active, setActive] = useState("All");
  return (
    <div className="overflow-hidden">
      <LandingHeader />
      <div className="grid grid-cols-4 mt-20.25 h-[calc(100vh-81px)] ">
        <div className="border-r border-stone-300 flex flex-col ">
          <div className="px-4">
            <input
              placeholder=" Search By Name......"
              className="w-full h-10 rounded-xs outline-none px-2 mt-6 "
            />
          </div>
          <div className=" border-b border-stone-300 mt-6"></div>
          <div className=" flex-1 ">
            <div className="px-4">
              <h3 className="py-3">Filter By Category</h3>
              <div className="flex flex-wrap flex-col gap-3   ">
                {catergory?.map((i, index) => {
                  return (
                    <button
                      key={index}
                      className={`${active === i ? "backdrop-blur-xl bg-black/30" : ""} px-2 py-1 
                      rounded-lg 
                     text-left   transition-all duration-300 ease-in-out `}
                      onClick={() => setActive(i)}
                    >
                      {i}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-3 grid  h-full overflow-y-auto">
          <div className=" grid grid-cols-3 p-4 gap-2 ">
            {[1, 2, 3, 4, 1, 2, 3, 4]?.map((i, index) => {
              return <ProductCard i={i} key={index} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCategory;
