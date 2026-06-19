import { useEffect, useState } from "react";
import { Spinner } from "./ui/spinner";
import { supabase } from "@/utils/supabase";
import ProductCard from "./productCard";

const EditProducts = () => {
  const [loading, setLoading] = useState(true);
  const [prod, setProdData] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const { data, error } = await supabase
          .from("products")
          .select("*")
          .order("created_at", { ascending: false });
        if (error) throw error;
        setProdData(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="w-full flex items-center justify-center h-[80vh]">
        <Spinner />
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6 border border-stone-300 h-[80vh] overflow-y-auto">
      {!!prod &&
        prod?.map((item) => {
          return <ProductCard i={item} key={item.id} />;
        })}
    </div>
  );
};

export default EditProducts;
