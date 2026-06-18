import React, { useEffect, useState } from "react";
import { LandingHeader } from "./landingPage";
import ProductCard from "../components/productCard";
import { supabase } from "../utils/supabase";

const catergory = ["All", "Home Decor", "Gift Sets", "Wall Art"];

const ProductCategory = () => {
  const [active, setActive] = useState("All");
  const [products, setProducts] = useState([]);
  const [image, setImage] = useState(null);

  const handleImage = async (event) => {
    console.log(event);
    const file = event?.target?.files[0];
    // const ext = file.name.split(".").pop();
    const filePath = `products/images/${crypto.randomUUID()}`;
    const { data, error } = await supabase.storage
      .from("royalwood")
      .upload(filePath, file);
    if (!!data) {
      console.log(data, "----");
    }
  };

  useEffect(() => {
    const getData = async () => {
      const { data } = await supabase.from("products").select("*");
      return data;
    };
    getData().then((res) => {
      setProducts(res);
    });
  }, []);

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
                      className={`${active === i ? "backdrop-blur-xl bg-stone-400/30" : ""} px-2 py-1 
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
            {products &&
              products?.map((i, index) => {
                return <ProductCard i={i} key={index} inx={index + 1} />;
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCategory;
