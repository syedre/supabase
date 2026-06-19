import React, { useEffect, useState } from "react";
import { LandingHeader } from "./landingPage";
import ProductCard from "../components/productCard";
import { supabase } from "../utils/supabase";
import { NewHeader } from "../components/newHeader";

const ProductCategory = () => {
  const [active, setActive] = useState("10");
  const [products, setProducts] = useState([]);
  const [image, setImage] = useState(null);
  const [productCategory, setProductCategory] = useState([]);

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
    const getProductCategory = async () => {
      const { data } = await supabase.from("product_category").select("*");
      return data;
    };
    getProductCategory().then((res) => {
      setProductCategory([{ name: "All", id: "10" }, ...res]);
    });
  }, []);

  useEffect(() => {
    if (productCategory.length === 0) return;
    const get_all_ids = [];
    for (let item of productCategory) {
      if (item?.id !== "10") {
        get_all_ids.push(item.id);
      }
    }

    const getActiveData = async () => {
      const { data } = await supabase
        .from("products")
        .select("*")
        .in(
          "category_id",
          active === "10" && get_all_ids.length > 0 ? get_all_ids : [active],
        );
      return data;
    };
    getActiveData().then((res) => setProducts(res));
  }, [active, JSON.stringify(productCategory)]);

  return (
    <div className="overflow-hidden">
      <NewHeader />

      <div className="grid grid-cols-6 mt-20.25 h-[calc(100vh-81px)] ">
        <div className="border-r col-span-2 md:col-span-1 border-stone-300 flex flex-col ">
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
                {!!productCategory &&
                  productCategory?.map((i, index) => {
                    return (
                      <button
                        key={index}
                        className={`${active === i?.id ? "backdrop-blur-xl bg-stone-400/30" : ""} 
                      rounded-lg 
                     text-left   transition-all duration-300 ease-in-out px-2 `}
                        onClick={() => setActive(i?.id)}
                      >
                        {i?.name}
                      </button>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-4 md:col-span-5  grid  h-full overflow-y-auto">
          <div className=" grid grid-cols-1 md:grid-cols-5 p-4 gap-4 ">
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
