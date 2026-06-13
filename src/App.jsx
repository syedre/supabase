import { useEffect, useState } from "react";
import "./App.css";
import ExpandFolder from "./components/fileExplorer";
import Tabs from "./components/compoundComponent";
import CustomSelect from "./components/selectCom";
import Inter from "./components/intersection";
import CustomSwitch from "./components/customSwitch";
import Otp from "./components/otp";
import MultiStep from "./components/multistep";
import Todo from "./components/todo";
import DebouncedSearch from "./components/debounceSearch";
import Supa from "./components/supabase";
import Signup from "./components/signUp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login";
import ProtectedRoute from "./components/protectedRoute";

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle(
      "dark",
      isDark === true ? true : false,
    );
  }, [isDark]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/todo"
          element={
            <ProtectedRoute>
              <Todo />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
