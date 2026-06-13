import React, { useEffect, useState } from "react";
import { supabase } from "../utils/supabase";
import { useDebounce } from "../hooks/useDebounce";

const DebouncedSearch = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const debounceValue = useDebounce(input, 1000);

  console.log(debounceValue, "debounce ");

  useEffect(() => {
    if (debounceValue.length === 0) {
      setTodos([]);
      return;
    }
    const getTodos = async () => {
      const { data, error } = await supabase
        .from("todos")
        .select("*")
        .ilike("name", `%${debounceValue}%`);
      if (error) {
        console.error(error);
        return;
      }
      setTodos(data || []);
    };
    getTodos();
  }, [debounceValue]);

  // const filteredTodos = todos?.filter((todo) => {
  //   if (todo?.name?.toLowerCase().includes(debounceValue) === true) {
  //     return todo;
  //   }
  // });

  return (
    <div>
      <input
        className="border border-amber-300"
        onChange={(e) => setInput(e.target.value)}
        value={input}
        placeholder="search"
      />
      {todos?.map((i, index) => (
        <div key={index}>{i?.name}</div>
      ))}
    </div>
  );
};
export default DebouncedSearch;
