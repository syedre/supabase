import React from "react";
import prod_1 from "../assets/prod_1.jpeg";
import prod_2 from "../assets/prod_2.jpeg";
import prod_3 from "../assets/prod_3.jpeg";
import prod_4 from "../assets/prod_4.jpeg";

const ProductCard = ({ i }) => {
  const obj = {
    1: prod_1,
    2: prod_2,
    3: prod_3,
    4: prod_4,
  };
  return (
    <div className="group overflow-hidden rounded-3xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="overflow-hidden">
        <img
          src={obj[i]}
          alt={`prod_${i}`}
          className="h-72 w-full  object-cover transition-transform duration-500 group-hover:scale-105 "
        />
      </div>
      <div className="p-5">
        <h3 className="text-sm font-semibold text-zinc-900">
          Premium Teak Plywood
        </h3>

        <p className="mt-2 text-xs leading-4 text-zinc-600">
          High-quality plywood with exceptional durability and elegant finish,
          suitable for residential and commercial interiors.
        </p>

        <div className="mt-5 flex items-center ">
          <button className="rounded-xl w-full border border-stone-300 px-4 py-2 text-xs font-medium text-stone-500 transition hover:bg-zinc-700 hover:text-white">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
