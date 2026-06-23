import React from "react";
import ProductCard from "./productCard";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

const ProductDisplay = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="p-10 h-full">
        <h2 className=" text-2xl pb-2">Products</h2>
        <div className="md:border md:border-stone-300 w-full h-full rounded-2xl flex flex-col items-center gap-8 pb-8">
          <div className="grid md:grid-cols-4 sm:grid-cols-1 gap-8 w-full h-auto md:p-10 lg:p-10">
            {[1, 2, 3, 4]?.map((item, index) => {
              return <ProductCard item={item} key={index} />;
            })}
          </div>
          <div>
            <Button
              size={"lg"}
              onClick={() => navigate("/products")}
              className="button-pulse w-50 border bg-transparent border-stone-400 text-stone-500 p-2 rounded-sm transition-all hover:text-white hover:bg-black/30"
            >
              View Products
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDisplay;
