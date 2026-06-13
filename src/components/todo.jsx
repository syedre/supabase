import React, { useEffect, useState } from "react";
import { supabase } from "../utils/supabase";
import { useNavigate } from "react-router-dom";

const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const [todo, setTodos] = useState([]);
  const [editId, setEditId] = useState(null);

  const navigate = useNavigate();

  const addTodo = () => {
    if (inputValue.length == 0) return;
    if (editId === null) {
      const newTodo = [...todo, { id: crypto.randomUUID(), name: inputValue }];
      console.log(newTodo, "new");
      setTodos(newTodo);
    }
    if (!!editId) {
      const updateTodo = todo?.map((i) => {
        if (i?.id === editId) {
          return { ...i, name: inputValue };
        } else {
          return i;
        }
      });
      setTodos(updateTodo);
      setEditId(null);
      setInputValue("");
    }
  };

  const handleDelete = (id) => {
    const filter_data = todo?.filter((_f) => _f.id !== id);
    setTodos(filter_data);
  };

  const handleEdit = (id, name) => {
    setEditId(id);
    setInputValue(name);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  return (
    <div className="flex justify-center flex-col p-20">
      <input
        placeholder="add Todo"
        className="border border-zinc-500 rounded-xl placeholder:text-[15px] placeholder:pl-2"
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            addTodo();
            setInputValue("");
          }
        }}
      />
      <button
        className="bg-sky-500 text-white w-10 rounded-xl"
        onClick={addTodo}
      >
        Add
      </button>

      <ul className="list-decimal">
        {todo?.map((i) => {
          return (
            <li key={i?.id}>
              <span>{i?.name}</span>
              <button onClick={() => handleDelete(i?.id)}>✖︎</button>
              <button onClick={() => handleEdit(i.id, i.name)}>✏️</button>
            </li>
          );
        })}
      </ul>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Todo;
