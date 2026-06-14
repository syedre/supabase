import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../utils/supabase";
import { UserContext } from "../App";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const checkUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUserId(user.id);

      if (!user) {
        navigate("/");
        return;
      }
      setLoading(false);
    };

    checkUser();
  }, []);

  if (loading) return <div>loading</div>;

  return (
    <UserContext.Provider value={{ uid: userId }}>
      {children}
    </UserContext.Provider>
  );
};

export default ProtectedRoute;
