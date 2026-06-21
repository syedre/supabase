import React, { useEffect, useState } from "react";
import ProductCard from "../components/productCard";
import { supabase } from "../utils/supabase";
import { NewHeader } from "../components/newHeader";
import { Spinner } from "@/components/ui/spinner";

const ProductCategory = () => {
  const [active, setActive] = useState("10");
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [productCategory, setProductCategory] = useState([]);

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

    const fetchProducts = async () => {
      setLoading(true);

      try {
        const allIds = productCategory
          .filter((item) => item.id !== "10")
          .map((item) => item.id);

        const { data, error } = await supabase
          .from("products")
          .select("*")
          .in("category_id", active === "10" ? allIds : [active])
          .order("created_at", { ascending: false })
          .eq("is_active", true);

        if (error) throw error;

        setProducts(data || []);
      } catch (error) {
        console.error(error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [active, productCategory]);

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

        <div className="col-span-4 md:col-span-5  grid  h-full overflow-y-auto ">
          {loading === true && (
            <div className="flex items-center justify-center h-full">
              <Spinner className={"h-7 w-7"} />
            </div>
          )}
          {!!products && loading === false && (
            <div className=" grid grid-cols-1 md:grid-cols-5 p-4 gap-4 ">
              {products?.map((i, index) => {
                return <ProductCard i={i} key={index} inx={index + 1} />;
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCategory;
