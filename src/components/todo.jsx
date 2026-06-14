import React, { useContext, useEffect, useState } from "react";
import { supabase } from "../utils/supabase";
import { data, useNavigate } from "react-router-dom";
import UploadImage from "./uploadImage";
import { UserContext } from "../App";

const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const [todo, setTodos] = useState([]);
  const [editId, setEditId] = useState(null);
  const [img, setImg] = useState(null);

  const { uid } = useContext(UserContext);

  const navigate = useNavigate();

  const addTodo = async () => {
    if (inputValue.length == 0) return;
    if (editId === null) {
      const { data, error } = await supabase
        .from("todos")
        .insert({ name: inputValue, active: true })
        .select();

      if (!!data) {
        console.log(error, "---", data);
        const newTodo = [
          ...todo,
          { id: crypto.randomUUID(), name: inputValue },
        ];
        console.log(newTodo, "new");
        setTodos(newTodo);
      }
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

  useEffect(() => {
    const getData = async () => {
      const { data } = await supabase.from("todos").select();
      return data;
    };
    getData().then((res) => setTodos(res));

    const getImage = async () => {
      const { data } = supabase.storage
        .from("avatar")
        .getPublicUrl(
          "f1e33195-42b9-46c2-871f-d2021de7737f/profile/58e357f8-42d8-40b3-9638-abe0a343c9aa",
        );
      if (!!data) {
        setImg(data?.publicUrl);
      }
    };
    getImage();
  }, []);

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
      <UploadImage />
      <img src={img} alt="imgagsg" />
    </div>
  );
};

export default Todo;
