import React, { useState } from "react";
import prod_1 from "../assets/prod_1.jpeg";
import prod_2 from "../assets/prod_2.jpeg";
import prod_3 from "../assets/prod_3.jpeg";
import prod_4 from "../assets/prod_4.jpeg";
import { supabase, supabaseUrl } from "../utils/supabase";
import { useLocation } from "react-router-dom";
import { Label } from "./ui/label";
import { Switch } from "@/components/ui/switch";
const ProductCard = ({ i, inx }) => {
  const [enable, setEnable] = useState();
  const obj = {
    1: prod_1,
    2: prod_2,
    3: prod_3,
    4: prod_4,
  };

  const location = useLocation();
  const isDashboard = location.pathname === "/dashboard" ? true : false;

  const handleSwitch = async (id, checked) => {
    try {
      const { error } = await supabase
        .from("products")
        .update({ is_active: checked })
        .eq("product_id", id);
      if (error) throw error;
    } catch (error) {
      console.log(error);
    }
  };

  const base_url = `${supabaseUrl}/storage/v1/object/public/royalwood/${i?.image_url}`;
  return (
    <div className="group grid grid-rows-2 rounded-3xl bg-white shadow-md transition-all duration-300 hover:shadow-2xl ">
      <div className="">
        <img
          src={!!i.image_url ? base_url : obj[inx]}
          alt={`prod_${i}`}
          className="h-62 w-full  object-fill transition-transform duration-500 "
        />
      </div>
      <div className="p-5 flex h-full justify-between flex-col">
        <div className="flex-[20%]">
          <h3 className="text-sm font-semibold text-zinc-900">
            {i?.name || "Premium Teak Plywood"}
          </h3>
        </div>
        <div className="flex-[50%]">
          <p className=" text-xs leading-4 text-zinc-600">
            High-quality plywood with exceptional durability and elegant finish,
            suitable for residential and commercial interiors.
          </p>
        </div>
        {isDashboard === true && (
          <div className="flex items-center space-x-2">
            <Switch
              defaultChecked={i?.is_active}
              checked={enable}
              id="airplane-mode"
              onCheckedChange={(checked) => {
                handleSwitch(i?.product_id, checked);
              }}
            />
            <Label htmlFor="airplane-mode">Active</Label>
          </div>
        )}

        <div className=" flex items-center flex-[20%]">
          <button className="rounded-xl w-full border border-stone-300 px-4 py-2 text-xs font-medium text-stone-500 transition hover:bg-zinc-700 hover:text-white">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
