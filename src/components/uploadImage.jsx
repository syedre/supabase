import React, { useContext, useEffect, useRef, useState } from "react";
import { supabase, supabaseUrl } from "../utils/supabase";
import { UserContext } from "../App";

const UploadImage = ({ imageData }) => {
  const [img, setImg] = useState(null);
  const { uid: userId } = useContext(UserContext);

  const ref = useRef();
  const base_img = `${supabaseUrl}/storage/v1/object/public/avatar/${imageData}`;

  const handleFile = async (e) => {
    const avatarFile = e.target.files[0];
    const newfilePath = `${userId}/logo/avatar`;

    const { data, error } = await supabase.storage
      .from("avatar")
      .upload(newfilePath, avatarFile, {
        upsert: true,
      });

    if (!!data) {
      const { error } = await supabase
        .from("profile")
        .update({ image_url: data?.path })
        .eq("user_id", userId);
      const con_img = `${base_img}?t=${Date.now()}`;
      setImg(con_img);
    }
  };
  useEffect(() => {
    const _baseimg = `${base_img}?t=${Date.now()}`;
    setImg(_baseimg);
  }, []);

  return (
    <div>
      <input ref={ref} type="file" onChange={(e) => handleFile(e)} />
      <button onClick={() => ref.current.click()}>upload</button>
      <img src={img} alt="avatar" />
    </div>
  );
};

export default UploadImage;
