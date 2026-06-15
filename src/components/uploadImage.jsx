import React, { useContext, useEffect, useRef, useState } from "react";
import { supabase } from "../utils/supabase";
import { UserContext } from "../App";

const UploadImage = () => {
  const { uid: userId } = useContext(UserContext);

  const ref = useRef();

  const handleFile = async (e) => {
    const avatarFile = e.target.files[0];
    const newfilePath = `${userId}/logo/avatar`;

    const { data, error } = await supabase.storage
      .from("avatar")
      .upload(newfilePath, avatarFile, {
        upsert: true,
      });
    console.log(data, "image data");

    if (!!data) {
      const { error } = await supabase
        .from("profile")
        .update({ image_url: data?.path })
        .eq("user_id", userId);
    }
  };

  return (
    <div>
      <input ref={ref} type="file" onChange={(e) => handleFile(e)} />
      <button onClick={() => ref.current.click()}>upload</button>
    </div>
  );
};

export default UploadImage;
