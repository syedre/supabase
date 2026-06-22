import React, { useEffect, useRef, useState } from "react";
import { supabase } from "../utils/supabase";

const AddProduct = () => {
  const inputRef = useRef();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
  });

  const [productCategory, setProductCategory] = useState([]);
  const [file, setFile] = useState(null);

  const handleClick = () => {
    inputRef.current.click();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files?.[0];

    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      alert("Please select a file");
      return;
    }

    try {
      setLoading(true);
      const filePath = `products/images/${crypto.randomUUID()}`;
      const { data: imageData, error: imageError } = await supabase.storage
        .from("royalwood")
        .upload(filePath, file);

      if (imageError) throw imageError;

      const { error } = await supabase.from("products").insert({
        name: formData.name,
        description: formData.description,
        image_url: imageData.path,
        is_active: true,
        category_id: formData.category,
      });

      if (error) throw error;

      alert("Submitted Successfully");
      setFormData({
        name: "",
        description: "",
        category: "",
      });
      setFile(null);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const { data, error } = await supabase
          .from("product_category")
          .select("*");

        if (error) throw error;
        if (data) return data;
      } catch (error) {
        console.error(error);
      }
    };

    getData().then((res) => {
      setProductCategory(res);
      setFormData({
        name: "",
        description: "",
        category: res?.[0]?.id,
      });
    });
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      <form
        onSubmit={handleSubmit}
        className="border border-stone-400 rounded-2xl p-6 flex flex-col gap-4"
      >
        <div>
          <label className="block mb-1">Name</label>
          <input
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded-lg p-2"
          />
        </div>

        <div>
          <label className="block mb-1">Description</label>
          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border rounded-lg p-2"
            rows={4}
          />
        </div>

        <div>
          <label className="block mb-1">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full border rounded-lg p-2"
          >
            {productCategory.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </div>

        <input
          ref={inputRef}
          type="file"
          className="hidden"
          accept=".jpg,.jpeg,.png,image/jpeg,image/png"
          onChange={handleFileChange}
        />

        <button
          type="button"
          onClick={handleClick}
          className="bg-stone-300 p-2 rounded-lg"
        >
          Select File
        </button>

        {file && (
          <p className="text-sm text-stone-600">Selected: {file.name}</p>
        )}

        <button
          disabled={loading === true ? true : false}
          type="submit"
          className="bg-black text-white p-2 rounded-lg "
        >
          {loading ? "loading ...." : "Submit"}
        </button>
      </form>

      <div>
        <h2 className="font-semibold mb-4">Preview</h2>

        <pre className="bg-stone-100 p-4 rounded-lg">
          {JSON.stringify(formData, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default AddProduct;
