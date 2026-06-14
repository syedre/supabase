import React, { useEffect, useRef, useState } from "react";
import { supabase } from "../utils/supabase";

const UploadImage = () => {
  const [userId, serUserId] = useState(null);
  const ref = useRef();
  const handleFile = async (e) => {
    const avatarFile = event.target.files[0];
    const filePath = `${userId}/profile/${crypto.randomUUID()}`;

    const { data, error } = await supabase.storage
      .from("avatar")
      .upload(filePath, avatarFile, {});
    console.log(data, "image data");

    if (!!data) {
      const { error } = await supabase
        .from("profile")
        .update({ image_url: data?.path })
        .eq("user_id", userId);
    }
  };

  useEffect(() => {
    async function isUser() {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      serUserId(user.id);
    }
    isUser();
  }, []);

  return (
    <div>
      {/* Image */}

      <input ref={ref} type="file" onChange={(e) => handleFile(e)} />
      <button onClick={() => ref.current.click()}>upload</button>
    </div>
  );
};

export default UploadImage;
