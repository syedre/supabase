import { useState, useEffect } from "react";
import { supabase } from "../utils/supabase";

export default function Supa() {
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    const { data, error } = await supabase.from("todos").select("*");
    // .eq("active", true);

    if (error) {
      console.error(error);
      return;
    }

    setTodos(data);
  };

  useEffect(() => {
    getTodos();
  }, []);
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.name}</li>
      ))}
    </ul>
  );
}
