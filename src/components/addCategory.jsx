import { supabase } from "@/utils/supabase";
// import { Button } from "@base-ui/react";
import react, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Spinner } from "./ui/spinner";

const AddProductCategory = () => {
  const [inputCategory, setInputCategory] = useState("");
  const [listcategory, setListCategory] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAddCategory = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from("product_category")
        .insert({
          name: inputCategory,
        })
        .select("name");

      if (error) throw error;
      if (data) {
        setInputCategory("");
        setListCategory((prev) => [...prev, ...data]);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const { data, error } = await supabase
          .from("product_category")
          .select("name");

        if (error) throw error;
        if (data) setListCategory(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCategory();
  }, []);

  return (
    <div>
      <input
        value={inputCategory}
        onChange={(event) => setInputCategory(event.target.value)}
        placeholder="Add a category"
        className="pl-2"
      />
      <div>
        <Button
          variant="outline"
          size="sm"
          onClick={handleAddCategory}
          disabled={loading === true ? true : false}
        >
          {loading === true ? <Spinner /> : "Add Category"}
        </Button>
      </div>

      <div>
        {!!listcategory && (
          <ul>
            {listcategory?.map((item, index) => {
              return <li key={index}>{item?.name}</li>;
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default AddProductCategory;
