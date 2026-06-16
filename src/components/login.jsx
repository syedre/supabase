import { useState } from "react";
import { supabase } from "../utils/supabase";
import { useNavigate } from "react-router-dom";

export default function Login({}) {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    setLoading(true);

    const { data, error } = await supabase.auth.signInWithPassword({
      email: form.email,
      password: form.password,
    });

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    if (!!data.user) {
      navigate("/todo");
    }
  };

  return (
    <div className="flex mx-auto flex-col border border-gray-300 rounded-2xl px-10 py-20">
      <form
        onSubmit={handleLogin}
        className="flex flex-col gap-4 max-w-sm mx-auto "
      >
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-zinc-300 text-zinc-900 p-2 rounded border-zinc-400 border"
        >
          {loading ? "Logging In..." : "Login"}
        </button>
      </form>
      <button
        className="underline-link text-zinc-900"
        onClick={() => navigate("/")}
      >
        Sign Up
      </button>
    </div>
  );
}
