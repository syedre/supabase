import { useState } from "react";
import { supabase } from "../utils/supabase";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const navigate = useNavigate();
  const handleSignup = async (e) => {
    e.preventDefault();

    setLoading(true);

    const { data, error } = await supabase.auth.signUp({
      email: form.email,
      password: form.password,
      options: {
        data: {
          name: form.name,
        },
      },
    });

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    console.log(data);
    alert("Signup successful! Check your email.");
  };

  return (
    <div className="flex mx-auto flex-col  border border-gray-300 rounded-2xl px-6 py-13">
      <form
        onSubmit={handleSignup}
        className="flex flex-col gap-4 max-w-sm mx-auto "
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          className="border p-2 rounded"
        />

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
          {loading ? "Signing Up..." : "Sign Up"}
        </button>
      </form>
      <button
        className="underline-link text-zinc-900"
        onClick={() => navigate("/login")}
      >
        Already Have a Account Login Here
      </button>
    </div>
  );
}
