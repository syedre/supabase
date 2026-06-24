import React, { useEffect, useState } from "react";
import ProductCard from "../components/productCard";
import { supabase } from "../utils/supabase";
import { NewHeader } from "../components/newHeader";
import { Button } from "@/components/ui/button";

const _range_number = 5;

const ProductCategory = () => {
  const [active, setActive] = useState("10");
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [productCategory, setProductCategory] = useState([]);

  const [range, setRange] = useState(_range_number);
  const [totalCount, setTotalCount] = useState(0);

  const handleActive = (id) => {
    setRange(_range_number);
    setProducts([]);
    setActive(id);
  };

  useEffect(() => {
    const getProductCategory = async () => {
      const { data } = await supabase
        .from("product_category")
        .select("name, id");
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

        const { data, error, count } = await supabase
          .from("products")
          .select("*", {
            count: "exact",
          })
          .in("category_id", active === "10" ? allIds : [active])
          .order("created_at", { ascending: false })
          .eq("is_active", true)
          .range(range - _range_number, range - 1);

        if (error) throw error;
        if (range === _range_number) {
          setProducts(data);
        } else {
          setProducts((prev) => [...prev, ...data] || []);
        }
        setTotalCount(count);
      } catch (error) {
        console.error(error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [active, productCategory, range]);

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
                        onClick={() => handleActive(i?.id)}
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
          <>
            <div className=" grid grid-cols-1 md:grid-cols-5 p-4 gap-4 ">
              {products?.map((item, index) => {
                return <ProductCard item={item} key={index} />;
              })}
            </div>

            {products && products.length < totalCount && loading === false && (
              <div className="flex items-center justify-center pb-4  ">
                <Button
                  variant="outline"
                  onClick={() => setRange((prev) => prev + _range_number)}
                >
                  Load More Items...
                </Button>
              </div>
            )}
          </>
        </div>
      </div>
    </div>
  );
};

export default ProductCategory;
