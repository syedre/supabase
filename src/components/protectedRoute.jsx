import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../utils/supabase";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      console.log(user);

      if (!user) {
        navigate("/");
        return;
      }
    };

    checkUser();
  }, []);

  return children;
};

export default ProtectedRoute;
