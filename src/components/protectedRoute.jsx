import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../utils/supabase";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

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
      setLoading(false);
    };

    checkUser();
  }, []);

  if (loading) return <div>loading</div>;

  return children;
};

export default ProtectedRoute;
